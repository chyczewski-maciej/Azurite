/** @format */

"use strict";

const express = require("express"),
  methodOverride = require('method-override'),
  env = require("./core/env"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  tableStorageManager = require("./core/table/TableStorageManager"),
  cli = require("./core/cli"),
  BbPromise = require("bluebird"),
  { releaseResourcesOnSIGINT } = require('./core/utils');

class AzuriteTable {
  constructor() {
    this.server;
    releaseResourcesOnSIGINT.call(this);
  }

  init(options) {
    return env
      .init(options)
      .then(() => {
        return tableStorageManager.init();
      })
      .then(() => {
        const app = express();
        if (!env.silent) {
          app.use(morgan("dev"));
        }
        app.use(
          bodyParser.raw({
            inflate: true,
            // According to https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-the-table-service-data-model
            // maximum size of an entity is 1MB
            limit: "10000kb",
            type: function (type) {
              return true;
            },
          })
        );
        app.use(methodOverride("X-HTTP-Method"));
        require("./routes/table/TableRoute")(app);
        require("./routes/table/EntityRoute")(app);
        app.use(require("./middleware/table/validation"));
        app.use(require("./middleware/table/actions"));
        app.set('etag', false); // turn generated etag off
        this.server = app.listen(env.tableStoragePort, '0.0.0.0', () => {
          if (env.tableStoragePort === 0) {
            env.tableStoragePort = this.server.address().port;
          }

          if (!env.silent) {
            cli.tableStorageStatus();
          }
        });
      });
  }

  close() {
    return new BbPromise((resolve, reject) => {
      let closeArray = [];
      closeArray.push(this.server.close());
      closeArray.push(tableStorageManager.flush());
      closeArray.push(tableStorageManager.close());

      return Promise.all(closeArray).then(() => resolve());
    });
  }
}

module.exports = AzuriteTable;
