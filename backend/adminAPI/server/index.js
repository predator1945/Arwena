const express = require('express')
const api = require('./../api')

const start = (options) => {
    return new Promise((resolve, reject) => {


        const app = express();
        console.log("app api start")
        api(app, options);
        // app.get("*", (req, res) => res.json({msg:"ok"}))

        const server = app.listen(options.port, () => resolve(server))
    })
}

module.exports = Object.assign({}, { start })