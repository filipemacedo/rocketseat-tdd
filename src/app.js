const express = require('express');

class App {
    constructor() {
        this.express = express();

        this
          .middlewares()
          .routes();
    }

    /**
     * Define the middlewares
     */
    middlewares() {
        this.express.use(express.json());

        return this;
    }

    /**
     * Define routes
     */
    routes() {
      this.express.use(require('./routes'));

      return this;
    }
}

module.exports = new App().express
