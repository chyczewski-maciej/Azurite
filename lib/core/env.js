/** @format */

"use strict";

const utils = require("./utils"),
  path = require("path"),
  BbPromise = require("bluebird"),
  crypto = require("crypto"),
  fs = BbPromise.promisifyAll(require("fs-extra"));

const initialized = Symbol("initialized");

class Environment {
  constructor() {
    this[initialized] = false;
  }

  init(options) {
    if (this[initialized] && !options.overwrite) {
      return BbPromise.resolve();
    }
    this[initialized] = true;
    this.azuriteWorkspacePath = options.l || options.location || process.cwd();
    this.azuriteRootPath = path.join(__dirname, "../..");
    this.silent = options.s || options.silent;
    this.accountAuth = options.a || options.accountAuth;
    this.dbNameBlob = "__azurite_db_blob__.json";
    this.dbNameTable = "__azurite_db_table__.json";
    this.localStoragePath = path.join(
      this.azuriteWorkspacePath,
      "__blobstorage__"
    );
    this.azuriteDBPathBlob = path.join(
      this.azuriteWorkspacePath,
      this.dbNameBlob
    );
    this.azuriteDBPathTable = path.join(
      this.azuriteWorkspacePath,
      this.dbNameTable
    );
    this.emulatedStorageAccountName = "devstoreaccount1";
    this.blobStoragePort = normalizePort(10000, options.p, options.blobPort);
    this.queueStoragePort = normalizePort(10001, options.q, options.queuePort);
    this.tableStoragePort = normalizePort(10002, options.t, options.tablePort);
    this.blobModulePath = path.join(this.azuriteRootPath, "bin", "blob");
    this.queueModulePath = path.join(this.azuriteRootPath, "bin", "queue");
    this.tableModulePath = path.join(this.azuriteRootPath, "bin", "table");
    return fs.mkdirsAsync(this.localStoragePath);
  }

  /**
   * Based on the request it creates the according URI that is served by Azurite's internal web interface
   * directly powered by Node's static file server.
   *
   * The id is hashed to avoid base64-encoded filenames (i.e. ids) longer than 255 characters which is not supported on some file systems.
   *
   * @param {string} id of the blob
   *
   * @memberof Environment
   * */
  webStorageUri(id) {
    const hash = crypto
      .createHash("sha1")
      .update(id)
      .digest("base64")
      .replace(/\//g, "_");
    return `http://0.0.0.0:${this.blobStoragePort}/blobs/${hash}`;
  }

  /**
   * Creates the full path to the location of a blob on disk based on its ID.
   *
   * @param {any} id
   * @returns full path to blob on disk
   * @memberof Environment
   */
  diskStorageUri(id) {
    const hash = crypto
      .createHash("sha1")
      .update(id)
      .digest("base64")
      .replace(/\//g, "_");
    return path.join(this.localStoragePath, hash);
  }

  // We prepend a specific character to guarantee unique ids.
  // This is neccessary since otherwise snapshot IDs could overlap with block IDs could overlap with block-/append-/page-blob IDs.
  blobId(containerName, blobName) {
    return Buffer.from(`A${containerName}${blobName}`, "utf8").toString(
      "base64"
    );
  }

  blockId(containerName, blobName, blockId) {
    return Buffer.from(
      `B${containerName}${blobName}${blockId}`,
      "utf8"
    ).toString("base64");
  }

  snapshotId(containerName, blobName, date) {
    return Buffer.from(`C${containerName}${blobName}${date}`, "utf8").toString(
      "base64"
    );
  }
}

function normalizePort(defaultPort, ...ports) {
  for (let port of ports) {
    if (port) {
      return port;
    }

    // Allow 0 as a port number, to let Server.listen() assign an unused port.
    // The assigned port can later be retrieved calling server.address().port.
    if (port === 0) {
      return 0;
    }
  }

  return defaultPort;
}

module.exports = new Environment();
