const fs = require('fs')

module.exports = {
	ca: fs.readFileSync(`${__dirname}/ca.pem`),
	key: fs.readFileSync(`${__dirname}/key.pem`),
	cert: fs.readFileSync(`${__dirname}/cert.pem`)
}
