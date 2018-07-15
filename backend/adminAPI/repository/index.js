
const repository = (db) => {
    
    const collection = db.collection('artists');

    getAllArtists = () => {
        return new Promise((resolve, reject) => {
            const artists = collection.find({});

            resolve(artists)
        })
    }

    addArtist = (artist) => {
        return new Promise((resolve, reject) => {
            collection.insertOne(artist, (err, res));

            if (err) reject(err);

            resolve(res)
        })
    }
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