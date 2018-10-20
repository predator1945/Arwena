'use strict'
const server = require('./server/server')
const getRoutes = require('./docker/docker')
const config = require('./config/')

console.log('--- API Gateway ---')
console.log('Listing routes...')

getRoutes(config.dockerSettings)
  .then(routes => {
    console.log('Routes listed. Starting Server...')
    console.log(routes)
    return server.start({
      port: config.serverSettings.port,
      ssl: config.serverSettings.ssl,
      routes
    })
  })
  .then(app => {
    console.log(`Server started succesfully, running on port: ${config.serverSettings.port}.`)
    app.on('close', () => {
      console.log(`Server exited.`)
    })
  })
