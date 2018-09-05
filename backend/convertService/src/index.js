'use strict'

const { EventEmmiter } = require('events');
const mediator = new EventEmmiter();
const config = require('./config');

mediator.once('queue.ready', q =>{
    
});

config.queue.connect(config.qSettings, mediator);