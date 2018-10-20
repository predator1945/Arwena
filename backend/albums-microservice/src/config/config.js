const dbSettings = {
  db: 'arwena',
  user: process.env.DB_USER || 'user',
  pass: process.env.DB_PASS || 'pass',
  url: process.env.DB_SERVER || '192.168.99.100:27017'
}

const serverSettings = {
  port: process.env.PORT || 3001,
  ssl: require('./ssl')
}

module.exports = Object.assign({}, { dbSettings, serverSettings })
