'use strict'
const { EventEmitter } = require('events')
const server = require('./server/')
const repository = require('./repository/')
const config = require('./config/')
const mediator = new EventEmitter()

console.log('--- AdminAPI Service ---')
console.log('Connecting to adminAPI repository...')

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err)
})

process.on('uncaughtRejection', (err, promise) => {
    console.error('Unhandled Rejection', err)
})

mediator.on('db.ready', (db) => {
    let rep
    repository.connect(db)
        .then(repo => {
            console.log('Connected. Starting Server')
            console.log(repo)
            rep = repo
            return server.start({
                port: config.serverSettings.port,
                rep
            })
        })
        .then(app => {
            console.log(`Server started succesfully, running on port: ${config.serverSettings.port}.`)
            app.on('close', () => {
                rep.disconnect()
            })
        })
})

mediator.on('db.error', (err) => {
    console.error(err)
})

config.db.connect(config.dbSettings, mediator)

mediator.emit('boot.ready')