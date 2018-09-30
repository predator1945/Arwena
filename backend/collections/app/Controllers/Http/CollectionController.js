'use strict'

const Collection = use('App/Models/Collection')

class CollectionController {
    async index({ view }) {
        const collection = {
            title: "Często odtwarzane",
            description: "Twoje najczęsciej odtwarzane w tym miesiącu",
            albums: [
                {
                    title: "Album 1",
                    artist: "Katy Perry",
                    cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

                }, {
                    title: "Album 1",
                    artist: "Katy Perry",
                    cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

                }, {
                    title: "Album 1",
                    artist: "Katy Perry",
                    cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

                }, {
                    title: "Album 1",
                    artist: "Katy Perry",
                    cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

                }, {
                    title: "Album 1",
                    artist: "Katy Perry",
                    cover: "http://1.bp.blogspot.com/-DFtZ6n8yv6U/Twz13Kj2ybI/AAAAAAAABLs/GcTCavEv-lc/s1600/Katy_Perry.jpg"

                },

            ]
        }
        //const collections = [collection, collection, collection, collection];

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
