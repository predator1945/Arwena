'use strict'

const api = require('../api');
const express = require('express');

const start = (options) => {
    return new Promise((resolve, reject) => {

        const app = express();

        api(app, options);

        const server = app.listen(options.port, () => resolve(server));
    })
}

module.exports = Object.assign({}, { start });