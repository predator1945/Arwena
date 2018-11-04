const { ca, cert, key } = require('./certs')

const dockerSettings = {
	host: 'http://192.168.99.100',
	protocol: 'https',
	port: 2376,
	ca,
	cert,
	key
}

const serverSettings = {
	port: process.env.PORT || 80,
	ssl: require('./ssl')
}

module.exports = Object.assign({}, { dockerSettings, serverSettings })
