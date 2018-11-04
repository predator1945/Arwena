'use strict'
const { MongoClient } = require('mongodb')

const getMongoURL = (options) => {
	return `mongodb://${options.user}:${options.pass}@${options.url}`
}
const connect = (options, mediator) => {
	mediator.once('boot.ready', () => {
		MongoClient.connect(
			getMongoURL(options), (err, db) => {
				if (err) {
					mediator.emit('db.error', err)
				} else {
					mediator.emit('db.ready', db.db(options.db))
				}
			})
	})
}

module.exports = Object.assign({}, { connect })
