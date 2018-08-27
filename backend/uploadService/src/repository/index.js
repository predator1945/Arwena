'use strict'

const repository = (db) => {

    let gfs= null;

    conn.once('open', () => {
        // Init stream
        gfs = Grid(conn.db, mongoose.mongo);
        gfs.collection('uploads');
    });


}









const connect = (connection) => {
    return new Promise((resolve, reject) => {
      if (!connection) {
        reject(new Error('connection db not supplied!'))
      }
      resolve(repository(connection))
    })
  }
  
  module.exports = Object.assign({}, {connect})