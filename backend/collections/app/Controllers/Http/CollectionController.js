'use strict'

const Collection = use('App/Models/Collection')

class CollectionController {
    async index({ view }) {
        const collections = await Collection.all();

        return view.render('collections.index', {
            collections: collections.toJSON()
        })
    }

    async add({ view }) {

        return view.render('collections.add')
    }

    async store({ request, response }) {
        const collection = new Collection()

        console.log(request.post())

        collection.title = request.input('title')
        collection.description = request.input('description')

        await collection.save()

        return response.redirect('/');
    }
}

module.exports = CollectionController
