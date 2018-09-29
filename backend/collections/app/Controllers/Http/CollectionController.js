'use strict'

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
        const collections = [collection, collection, collection, collection];

        return view.render('collections.index', {
            collections
        })
    }
}

module.exports = CollectionController
