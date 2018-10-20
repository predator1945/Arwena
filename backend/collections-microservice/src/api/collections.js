'use strict'
const status = require('http-status')

module.exports = (app, options) => {
  const { repo } = options

  app.get('/collections', (req, res, next) => {
    const { skip, limit } = req.params
    repo.getAllCollections(skip, limit).then(collections => {
      res.status(status.OK).json(collections)
    }).catch(next)
  })

  app.get('/collections/premieras', (req, res, next) => {
    const { skip, limit } = req.params
    repo.getCollectionsPremieras(skip, limit).then(collections => {
      res.status(status.OK).json(collections)
    }).catch(next)
  })

  app.get('/collections/:id', (req, res, next) => {
    repo.getCollectionById(req.params.id).then(collection => {
      res.status(status.OK).json(collection)
    }).catch(next)
  })
}
