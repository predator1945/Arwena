'use strict'
const server = require('./server')
const config = require('./config/')


console.log('--- Streaming Service ---')

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
    console.error('Unhandled Rejection', err)
})

server.start({
    port: config.serverSettings.port
})
    .then(app => {
        console.log(`Server started succesfully, running on port: ${config.serverSettings.port}.`)
    })



