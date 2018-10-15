'use strict'
const status = require('http-status')

module.exports = (app, options) => {
    const { repo } = options

    app.get('/albums', (req, res, next) => {
        const { skip, limit } = req.params
        repo.getAllAlbums(skip, limit).then(albums => {
            res.status(status.OK).json(albums)
        }).catch(next)
    })

    app.get('/albums/premieras', (req, res, next) => {
        const { skip, limit } = req.params
        repo.getAlbumPremieras(skip, limit).then(albums => {
            res.status(status.OK).json(albums)
        }).catch(next)
    })

    app.get('/albums/:id', (req, res, next) => {
        repo.getAlbumById(req.params.id).then(album => {
            res.status(status.OK).json(album)
        }).catch(next)
    })
}
