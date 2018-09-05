'use strict'
const { qSettings } = require('./settings')
const minio = require('./minio')
const queue = require('./queue')


module.exports = Object.assign({}, { minio, queue, qSettings });

