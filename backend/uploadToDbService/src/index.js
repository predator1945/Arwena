'use strict'
const { EventEmitter } = require('events')
const mediator = new EventEmitter()
const repository = require('./repository');
const config = require('./config');

console.log('--- Microservice ---');
console.log('Connecting to files repository...');

let gfs

mediator.on('db.ready', (conn) => {
    conn.once('open', () => {
        // Init stream
        gfs = Grid(conn.db, mongoose.mongo);
        gfs.collection('uploads');
    });
});

mediator.on('db.error', (err) => {
    console.error(err)
});

config.db.connect(config.dbSettings, mediator)

mediator.emit('boot.ready')

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const app = express();

// Middleware
app.use(bodyParser.json());






const mongoURI = 'mongodb://me:trudne12@ds153948.mlab.com:53948/heroku_ct5hg0wm';


const conn = mongoose.createConnection(mongoURI);
// Init gfs
let gfs;

conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});


// Create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});
const upload = multer({ storage });


app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
});

app.get('/files', (req, res) => {
    gfs.files.find().toArray((err, files) => {
        if (!files || files.length === 0) {
            return res.status(404).json({
                err: 'No files exist'
            });
        }

        return res.json(files);
    });
});

app.get('/files/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }

        return res.json(file);
    });
});

app.get('/music/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists'
            });
        }

        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);

    });
});





const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
