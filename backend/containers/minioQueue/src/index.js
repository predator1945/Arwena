'use strict'
const {EventEmitter} = require('events')
const mediator = new EventEmitter()
const config = require('./config/')

const server = require('./server')
const repository = require('./repository/')

console.log('--- Minio Microservice ---');
console.log('Connecting to Minio instance');

mediator.on('minio.ready', client => {
    repository.connect(client)
    .then(repo => {
        console.log('Minio client connected. Starting server...');

        return server.setMaxListeners({
            port: config.serverSettings.port,
            repo
        })
    })
    .then(app => {
        console.log(`Server started succesfully, running on port: ${config.serverSettings.port}.`)
    })
});

config.minio.connect(config.minioSettings, mediator)

mediator.emit('boot.ready')


const Minio = require('minio')
const uuid = require('uuid/v4');


const client = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'AKIAIOSFODNN7EXAMPLE',
    secretKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
})

const makeBucket = () => {
    const id = uuid();
    client.makeBucket(id, err => console.log(`err: ${err}`));
    return id;
}


const express = require('express')()

express.get('/presignedUrl', (req, res) => {
    console.log(`req.query: ${req.query}`)
    const id = makeBucket();
    console.log(`id1: ${id}`)
    client.presignedPutObject(id, req.query.name, (err, url) => {
        if (err) throw err
    console.log(`id2: ${id}`)
        //res.json({url, id});
        res.end(url)
    })
});


// client.makeBucket('files', 'us-east-1', function (err) {
//     if (err) return console.log("err")

//     console.log('Bucket created successfully in "us-east-1".')


// });

const metaData = {
    'Content-Type': 'text/html',
    'Content-Language': 123,
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
  }
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

express.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

express.listen(8080)