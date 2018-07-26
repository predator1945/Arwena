const dbSettings = {
    db: 'db',
    user: 'admin',
    pass: 'pass',
    address: 'localhost:27017'
}

const serverSettings = {
    port: 4000,
}

module.exports = Object.assign({}, { dbSettings, serverSettings });