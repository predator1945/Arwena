const {ca, cert, key} = require('./certs')
const fs = require('fs')

const dockerSettings = {
    host: 'http://192.168.99.100',
    protocol: "https",
    // host: 'http://172.17.0.1',
    port: 2376,
    ca: fs.readFileSync(__dirname + '/certs/ca.pem'),
    cert: fs.readFileSync(__dirname + '/certs/cert.pem'),
    key: fs.readFileSync(__dirname + '/certs/key.pem')
}

const serverSettings = {
    port: process.env.PORT || 80,
    ssl: require('./ssl')
}

module.exports = Object.assign({}, { dockerSettings, serverSettings })