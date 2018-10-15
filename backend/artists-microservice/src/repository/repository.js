'use strict'

const repository = (db) => {
    const col = db.collection('artists')

    const getAllArtists = (_skip = 0, _limit = 10) => {
        return new Promise((resolve, reject) => {
            let artists = []
            const cursor = col.find({}).skip(_skip).limit(_limit);

            const addArtist = artist => {
                artists.push(artist)
            }
            const sendArtists = (err) => {
                if (err) {
                    reject(new Error('Erro occured fetching all artists, stack: ' + err.stack))
                }
                resolve(artists)
            }
            cursor.forEach(addArtist, sendArtists);
        })
    }

    const getArtistById = (_id, _skip = 0, _limit = 10) => {
        return new Promise((resolve, reject) => {
            const artists = []

            const cursor = col.find({ _id }).skip(_skip).limit(_limit);
            const addArtist = artist => {
                artists.push(artist)
            }
            const sendArtists = (err) => {
                if (err) {
                    reject(new Error('Erro occured fetching all artists, stack: ' + err.stack))
                }
                resolve(artists)
            }
            cursor.forEach(addArtist, sendArtists);
        })
    }

    const getArtistPremieras = (_skip = 0, _limit = 10) => {
        console.log("xdd")
        return new Promise((resolve, reject) => {
            const artists = []

            const cursor = col.find({})
            

            const addArtist = artist => {
                artists.push(artist)
            }
            const sendArtists = (err) => {
                if (err) {
                    reject(new Error('Erro occured fetching all artists, stack: ' + err.stack))
                }
                resolve(artists)
            }
            cursor.forEach(addArtist, sendArtists);
        })
    }

    const disconnect = () => {
        db.close()
    }

    return Object.create({
        getAllArtists,
        getArtistById,
        getArtistPremieras,
        disconnect
    })
}

const connect = (connection) => {
    return new Promise((resolve, reject) => {
        if (!connection) {
            reject(new Error('connection db not supplied!'))
        }
        resolve(repository(connection))
    })
}

module.exports = Object.assign({}, { connect })
