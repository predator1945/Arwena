'use strict'

const { EventEmmiter } = require('events');
const mediator = new EventEmmiter();
const config = require('./config');

console.log('--- Minio Microservice ---');
console.log('Connecting to queue');

let queue = null;

mediator.on('queue.ready', q => {
    console.log('Connected to queue. Connecting to minio...');
    queue = q;
    
})

config.queue.connect(config.qSettings, mediator);

mediator.emit('boot.ready');