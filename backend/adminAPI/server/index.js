const express = require('express')
const api = require('./../api')

const start = (options) => {
    return new Promise((resolve, reject) => {


        let app = express();
        api(app, options);

        const server = app.listen(options.port, () => resolve(server))
    })
}

module.exports = Object.assign({}, { start })