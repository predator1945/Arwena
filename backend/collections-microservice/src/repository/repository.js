'use strict'

const repository = (db) => {
    const col = db.collection('collections')

    const getAllCollections = (_skip = 0, _limit = 10) => {
        return new Promise((resolve, reject) => {
            let collections = []
            const cursor = col.find({}).skip(_skip).limit(_limit);

            const addCollection = collection => {
                collections.push(collection)
            }
            const sendCollections = (err) => {
                if (err) {
                    reject(new Error('Erro occured fetching all collections, stack: ' + err.stack))
                }
                resolve(collections)
            }
            cursor.forEach(addCollection, sendCollections);
        })
    }

    const getCollectionById = (_id, _skip = 0, _limit = 10) => {
        return new Promise((resolve, reject) => {
            const collections = []

            const cursor = col.find({ _id }).skip(_skip).limit(_limit);
            const addCollection = collection => {
                collections.push(collection)
            }
            const sendCollections = (err) => {
                if (err) {
                    reject(new Error('Erro occured fetching specific collection, stack: ' + err.stack))
                }
                resolve(collections)
            }
            cursor.forEach(addCollection, sendCollections);
        })
    }

    const getCollectionPremieras = (_skip = 0, _limit = 10) => {
        console.log("xdd")
        return new Promise((resolve, reject) => {
            const collections = []

            const cursor = col.find({})
            

            const addCollection = collection => {
                collections.push(collection)
            }
            const sendCollections = (err) => {
                if (err) {
                    reject(new Error('Erro occured fetching new collections, stack: ' + err.stack))
                }
                resolve(collections)
            }
            cursor.forEach(addCollection, sendCollections);
        })
    }

    const disconnect = () => {
        db.close()
    }

    return Object.create({
        getAllCollections,
        getCollectionById,
        getCollectionPremieras,
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
