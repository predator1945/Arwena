'use strict'
const uuid = require('uuid/v4');
const { qSettings } = require('./../config');

const RESOLUTIONS = [
    { res: "426x240", bitrate: "400" },
    { res: "640x360", bitrate: "750" },
    { res: "854x480", bitrate: "1000" },
    { res: "1280x720", bitrate: "2500" },
    { res: "1920x1080", bitrate: "4500" }
];

const repository = (client, queue) => {

    const makeBucket = () => {
        const id = uuid();
        client.makeBucket(id, err => new Error(`Error occured creating bucket. Err: ${err}`));
        return id;
    }

    const getMsg = (url, id, resolution) => {
        return {
            url,
            id,
            resolution
        }
    }

    const sendToQueue = (msg) => {
        queue.sendToQueue(qSettings.name, new Buffer(msg), { persistent: true });
    }

    const addToQueue = (url, id) => {
        RESOLUTIONS.forEach(res => {
            sendToQueue(getMsg(url, id, res));
        });
    }

    const uploadFile = (name) => {
        return new Promise((resolve, reject) => {
            const id = makeBucket();
            client.presignedPutObject(id, name, (err, url) => {
                if (err) reject(err)
                resolve({ url, id });
            })
        })
    }

    return Object.create({
        uploadFile
    })
}

const connect = (client, queue) => {
    return new Promise((resolve, reject) => {
        if (!client) {
            reject(new Error('Minio client do not supplied!'))
        }

        if (!queue) {
            reject(new Error('Queue do not supplied!'))
        }
        resolve(repository(client, queue))
    })
}

module.exports = Object.assign({}, { connect })


