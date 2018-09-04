'use strict'

const api = require('../api');
const express = require('express');

const start = (options) => {
    return new Promise((resolve, reject) => {

        const app = express();

        api(app, options);

        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        })

        const server = app.listen(options.port, () => resolve(server));
    })
}

module.exports = Object.assign({}, { start });