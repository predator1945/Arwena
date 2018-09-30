'use strict'
const uuidv4 = require('uuid/v4')
const fs = use('fs')
const Helpers = use('Helpers')
const readFile = Helpers.promisify(fs.readFile)
const Album = use('App/Models/Album')

class AlbumController {

    async index({ view }) {
        const albums = await Album.all();

        return view.render('albums.index', {
            albums: albums.toJSON()
        })
    }

    async add({ view }) {

        return view.render('albums.add')
    }

    async store({ request, response }) {
        const album = new Album()

        const cover = request.file('cover', {
            type: ['image'],
            size: '2mb'
        })

        const coverId = uuidv4();

        await cover.move(Helpers.tmpPath('uploads'), {
            name: coverId
        })
        album.cover = '/cover/' + coverId;

        album.title = request.input('title')
        album.artist = request.input('artist')
        
        await album.save()

        return response.redirect('/');
    }

    async cover({ params, response }) {
        const xd = JSON.stringify(params)
        return await readFile('tmp/uploads/' + params.id)
    }
}

module.exports = AlbumController
