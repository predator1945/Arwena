'use strict'
const MongoClient = require('mongodb')

const getMongoURL = (options) => {
    return `mongodbb://${options.username}:${options.passwd}@${options.url}`
}

const connect = (options, mediator) => {
    mediator.once('boot.ready', () => {
        const mongoURI = getMongoURL(options);
        const conn = mongoose.createConnection(mongoURI);

        mediator.emit('db.ready', conn)
    })
}