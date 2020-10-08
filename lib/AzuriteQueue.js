/** @format */

"use strict";

const express = require("express"),
  env = require("./core/env"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  cli = require("./core/cli"),
  BbPromise = require("bluebird"),
  { releaseResourcesOnSIGINT } = require('./core/utils');

class AzuriteQueue {
  constructor() {
    this.server;
    releaseResourcesOnSIGINT.call(this);
  }

  init(options) {
    return env.init(options).then(() => {
      const app = express();
      if (!env.silent) {
        app.use(morgan("dev"));
      }
      app.use(
        bodyParser.raw({
          inflate: true,
          limit: "10000kb",
          type: function (type) {
            return true;
          },
        })
      );
      require("./routes/queue/AccountRoute")(app);
      require("./routes/queue/QueueRoute")(app);
      require("./routes/queue/MessageRoute")(app);
      app.use(require("./middleware/queue/validation"));
      app.use(require("./middleware/queue/actions"));
      this.server = app.listen(env.queueStoragePort, '0.0.0.0', () => {
        if (env.queueStoragePort === 0) {
          env.queueStoragePort = this.server.address().port;
        }

        if (!env.silent) {
          cli.queueStorageStatus();
        }
      });
    });
  }

  close() {
    return new BbPromise((resolve, reject) => {
      this.server.close(err => err ? reject(err) : resolve());
    });
  }
}

module.exports = AzuriteQueue;
