'use strict'
const { EventEmitter } = require('events')
const server = require('./server/server')
const getRoutes = require('./docker/docker')
const config = require('./config/')


console.log('--- API Gateway ---')
console.log('Listing routes...')

// const fs = require('fs');
// const Docker = require('dockerode')
// console.log(config)
// // DEFINE THE DOCKER CONFIGURATION
// var host = 'http://' + "192.168.99.100",
// docker = new Docker({...config.dockerSettings});
// let out = ""
// console.log(docker)
// docker.listContainers({all:true},function(err, containers){
//   console.log(containers)
//   containers.forEach(function(container) {
//     out += "\n" + container
//   });
// });


// process.on('uncaughtException', (err) => {
//     console.error('Unhandled Exception', err)
//     process.exit(1)
// })

// process.on('uncaughtRejection', (err) => {
//     console.error('Unhandled Rejection', err)
//     process.exit(1)
// })
// console.log(process.env.DOCKER_IP)
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
            rep.disconnect()
        })
    })
