const MongoClient = require('mongodb');

const getMongoURL = (options) => {
    const { user, pass, address } = options;
    return `mongodb://${user}:${pass}@${address}`
}

const connect = (options, mediator) => {
    mediator.once('boot.ready', () => {
        MongoClient.connect(
            getMongoURL(options),
            (err, db) => {
                if (err) mediator.emit('db.error');

                console.log(db.db('db'))
                mediator.emit('db.ready', db.db('db'))
            }
        )
    })
}

module.exports = Object.assign({}, { connect });