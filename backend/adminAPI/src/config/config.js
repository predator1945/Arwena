const dbSettings = {
    db: 'db',
    user: 'admin',
    pass: 'pass',
    address: 'localhost:27017'
}

const serverSettings = {
    port: 3000,
}

module.exports = Object.assign({}, { dbSettings, serverSettings });