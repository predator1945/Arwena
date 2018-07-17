
const repository = (db) => {

    const collection = db.collection('artists');

    const getAllArtists = () => {
        return new Promise((resolve, reject) => {

            const artists = []
            const cursor = collection.find({})
            const addArtist = (artist) => {
                artists.push(artist)
            }
            const sendArtists = (err) => {
                if (err) {
                    reject(new Error('An error occured fetching all artists, err:' + err))
                }
                resolve(artists.slice())
            }
            cursor.forEach(addArtist, sendArtists);
        })
    }


    const addArtist = (artist) => {
        return new Promise((resolve, reject) => {
            collection.insertOne(artist, (err, res));

            if (err) reject(err);

            resolve(res)
        })
    }

    const disconnect = () => {
        db.close()
    }

    return Object.create({
        getAllArtists,
        addArtist,
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