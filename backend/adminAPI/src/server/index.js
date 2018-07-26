const express = require('express')
const api = require('./../api')
const bodyParser = require('body-parser')


const start = (options) => {
    return new Promise((resolve, reject) => {


        let app = express();
        app.use(bodyParser.json())
        api(app, options);

        const server = app.listen(options.port, () => resolve(server))
    })
}

module.exports = Object.assign({}, { start })