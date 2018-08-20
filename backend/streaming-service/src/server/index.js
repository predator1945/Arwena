const express = require('express')
const api = require('../api/streaming')

const start = (options) => {
  return new Promise((resolve, reject) => {
    if (!options.port) {
      reject(new Error('The server must be started with an available port'))
    }

    let app = express();

    api(app, options)
    
    const server = app.listen(options.port, () => resolve(server))
  })
}

module.exports = Object.assign({}, {start})