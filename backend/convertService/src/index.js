'use strict'

const { EventEmmiter } = require('events');
const mediator = new EventEmmiter();
const config = require('./config');

console.log('--- Converting Video Microservice ---');
console.log('Connecting to queue...');

let queue = null;

mediator.on('queue.ready', q => {
    console.log('Connected to queue. Connecting to minio...');
    queue = q;
})

mediator.on('minio.ready', client => {
    repository.connect(client, queue)
        .then(repo => {
            console.log('Minio client connected. Starting worker...');
        });

        return worker.start({
            port: config.serverSettings.port,
            repo,
            queue
        })
});

config.queue.connect(config.qSettings, mediator);

mediator.emit('boot.ready');