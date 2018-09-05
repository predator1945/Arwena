'use strict'
const { EventEmitter } = require('events')
const mediator = new EventEmitter()
const config = require('./config/')

const server = require('./server')
const repository = require('./repository/')

console.log('--- Minio Microservice ---');
console.log('Connecting to queue');

let queue = null;

mediator.on('queue.ready', q => {
    console.log('Cinnected to queue. Connecting to minio...');
    queue = q;    
})

mediator.on('minio.ready', client => {
    repository.connect(client, queue)
        .then(repo => {
            console.log('Minio client connected. Starting server...');

            return server.start({
                port: config.serverSettings.port,
                repo,
                queue
            })
        })
        .then(app => {
            console.log(`Server started succesfully, running on port: ${config.serverSettings.port}.`)
        })
});

mediator.on('queue.err', err => console.log(err))

config.queue.connect(config.qSettings, mediator);
config.minio.connect(config.minioSettings, mediator)


mediator.emit('boot.ready')




// const express = require('express')()

// express.get('/presignedUrl', (req, res) => {
//     console.log(`req.query: ${req.query}`)
//     const id = makeBucket();
//     console.log(`id1: ${id}`)
//     client.presignedPutObject(id, req.query.name, (err, url) => {
//         if (err) throw err
//     console.log(`id2: ${id}`)
//         //res.json({url, id});
//         res.end(url)
//     })
// });


// client.makeBucket('files', 'us-east-1', function (err) {
//     if (err) return console.log("err")

//     console.log('Bucket created successfully in "us-east-1".')


// });

// const metaData = {
//     'Content-Type': 'text/html',
//     'Content-Language': 123,
//     'X-Amz-Meta-Testing': 1234,
//     'example': 5678
//   }
//   const file = '/home/ja/1.txt'
// // Using fPutObject API upload your file to the bucket europetrip.
// client
// .fPutObject('files', '1.txt', file, metaData, function (err, etag) {
//     if (err) return console.log(err)
//     console.log('File uploaded successfully.')
// });
// server.get('/presignedUrl', (req, res) => {
//     console.log("xd")

//     res.end("xddd")
// });
