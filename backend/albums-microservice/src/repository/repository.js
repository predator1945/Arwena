'use strict'

const repository = (db) => {
  const col = db.collection('albums')

  const getAllAlbums = (_skip = 0, _limit = 10) => {
    return new Promise((resolve, reject) => {
      let albums = []
      const cursor = col.find({}).skip(_skip).limit(_limit)

      const addAlbum = album => {
        albums.push(album)
      }
      const sendAlbums = (err) => {
        if (err) {
          reject(new Error('Erro occured fetching all albums, stack: ' + err.stack))
        }
        resolve(albums)
      }
      cursor.forEach(addAlbum, sendAlbums)
    })
  }

  const getAlbumById = (_id, _skip = 0, _limit = 10) => {
    return new Promise((resolve, reject) => {
      const albums = []

      const cursor = col.find({ _id }).skip(_skip).limit(_limit)
      const addAlbum = album => {
        albums.push(album)
      }
      const sendAlbums = (err) => {
        if (err) {
          reject(new Error('Erro occured fetching all albums, stack: ' + err.stack))
        }
        resolve(albums)
      }
      cursor.forEach(addAlbum, sendAlbums)
    })
  }

  const getAlbumPremieras = (_skip = 0, _limit = 10) => {
    console.log('xdd')
    return new Promise((resolve, reject) => {
      const albums = []

      const cursor = col.find({})

      const addAlbum = album => {
        albums.push(album)
      }
      const sendAlbums = (err) => {
        if (err) {
          reject(new Error('Erro occured fetching all albums, stack: ' + err.stack))
        }
        resolve(albums)
      }
      cursor.forEach(addAlbum, sendAlbums)
    })
  }

  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getAllAlbums,
    getAlbumById,
    getAlbumPremieras,
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
