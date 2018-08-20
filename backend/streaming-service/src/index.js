'use strict'
const { EventEmitter } = require('events')
const server = require('./server/server')
const config = require('./config/')
const mediator = new EventEmitter()

console.log('--- Streaming Service ---')
// console.log('Connecting to songs repository...')

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
    console.error('Unhandled Rejection', err)
})


mediator.on('error', (err) => {
    console.error(err)
})

mediator.emit('boot.ready')