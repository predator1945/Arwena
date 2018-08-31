'use strict'
const uuid = require('uuid/v4');

const repository = (client) => {

    const makeBucket = () => {
        const id = uuid();
        client.makeBucket(id, err => reject(new Error(`Error occured creating bucket. Err: ${err}`)));
        return id;
    }

    const uploadFile = (name) => {
        const id = makeBucket();
        console.log(`id1: ${id}`)

        client.presignedPutObject(id, name, (err, url) => {
            if (err) throw err
            console.log(`id2: ${id}`)
            //res.json({url, id});
            res.end(url)
        })
    }

    return Object.create({
        uploadFile
    })
}

const connect = (client) => {
    return new Promise((resolve, reject) => {
        if (!client) {
            reject(new Error('Minio client do not supplied!'))
        }
        resolve(repository(client))
    })
}

module.exports = Object.assign({}, { connect })


