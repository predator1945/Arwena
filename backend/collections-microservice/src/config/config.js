const dbSettings = {
    db: 'arwena',
    user: process.env.DB_USER || 'user',
    pass: process.env.DB_PASS || 'pass',
    url: process.env.DB_SERVER || 'localhost:27017'
}

const serverSettings = {
    port: process.env.PORT || 3003,
    ssl: require('./ssl')
  }
  
  module.exports = Object.assign({}, { dbSettings, serverSettings })