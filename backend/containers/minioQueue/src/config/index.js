const minioSettings = require('./settings')
const minio = require('./minio')

module.exports = Object.assign({}, {minio, minioSettings});

