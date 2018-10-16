'use strict'
const status = require('http-status')

module.exports = (app, options) => {
    const { repo } = options

    app.get('/artists', (req, res, next) => {
        const { skip, limit } = req.params
        repo.getAllArtists(skip, limit).then(artists => {
            res.status(status.OK).json(artists)
        }).catch(next)
    })

    app.get('/artists/premieras', (req, res, next) => {
        const { skip, limit } = req.params
        repo.getArtistsPremieras(skip, limit).then(artists => {
            res.status(status.OK).json(artists)
        }).catch(next)
    })

    app.get('/artists/:id', (req, res, next) => {
        repo.getArtistById(req.params.id).then(artist => {
            res.status(status.OK).json(artist)
        }).catch(next)
    })
}
