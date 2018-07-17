const MongoClient = require('mongodb');

const getMongoURL = (options) => {
    const { user, pass, address } = options;
    return `mongodb://${user}:${pass}@${address}`
}

// const getMongoURL = (options) => 'mongodb://me:trudne12@ds153948.mlab.com:53948/heroku_ct5hg0wm'

const connect = (options, mediator) => {
    mediator.once('boot.ready', () => {
        MongoClient.connect(
            getMongoURL(options),
            (err, db) => {
                if (err) mediator.emit('db.error');

                mediator.emit('db.ready', db.db('db'))
            }
        )
    })
}

module.exports = Object.assign({}, { connect });