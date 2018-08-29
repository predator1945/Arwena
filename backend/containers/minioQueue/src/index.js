const Minio = require('minio')
const uuid = require('uuid');

const client = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'AKIAIOSFODNN7EXAMPLE',
    secretKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
})

// console.log(client)
const file = '/home/ja/1.txt'

const server = require('express')()

server.get('/presignedUrl', (req, res) => {
    console.log("xd")
    client.presignedPutObject('files', req.query.name, (err, url) => {
        if (err) throw err
        res.end(url)
    })
});


client.makeBucket('files', 'us-east-1', function (err) {
    if (err) return console.log("err")

    console.log('Bucket created successfully in "us-east-1".')


});

const metaData = {
    'Content-Type': 'text/html',
    'Content-Language': 123,
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
  }

// Using fPutObject API upload your file to the bucket europetrip.
client
.fPutObject('files', '1.txt', file, metaData, function (err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.')
});
server.get('/presignedUrl', (req, res) => {
    console.log("xd")

    res.end("xddd")
});

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(8080)