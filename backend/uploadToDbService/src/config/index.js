'use strict'
const db = require('./mongo')

const dbSettings = {
    username: 'me',
    passwd: 'trudne12',
    url: 'ds153948.mlab.com:53948/heroku_ct5hg0wm'
}

const serverSettings = {
    port: 5000
}

module.exports = Object.assign({}, { dbSettings, serverSettings, db })
