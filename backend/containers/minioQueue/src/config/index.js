const { minioSettings, serverSettings, qSettings} = require('./settings')
const minio = require('./minio')
const queue = require('./queue')


module.exports = Object.assign({}, {minio,queue,  minioSettings, serverSettings, qSettings});

