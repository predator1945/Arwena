'use strict'
const fs = require("fs")
module.exports = ((app, options) => {


    app.get("/:id", (req, res) => {

        const {id} = req.params
        let song = `songs/${id}.mp3`
        let stat = fs.statSync(song);
        const range = req.headers.range;
        let readStream;

        if (range !== undefined) {
            const parts = range.replace(/bytes=/, "").split("-");

            const partial_start = parts[0];
            const partial_end = parts[1];

            if ((isNaN(partial_start) && partial_start.length > 1) || (isNaN(partial_end) && partial_end.length > 1)) {
                return res.sendStatus(500); //ERR_INCOMPLETE_CHUNKED_ENCODING
            }

            const start = parseInt(partial_start, 10);
            const end = partial_end ? parseInt(partial_end, 10) : stat.size - 1;
            const content_length = (end - start) + 1;

            res.status(206).header({
                'Content-Type': 'audio/mpeg',
                'Content-Length': content_length,
                'Content-Range': "bytes " + start + "-" + end + "/" + stat.size
            });

            readStream = fs.createReadStream(song, { start: start, end: end });
        } else {
            res.header({
                'Content-Type': 'audio/mpeg',
                'Content-Length': stat.size
            });
            readStream = fs.createReadStream(song, null);
        }
        readStream.pipe(res);
    })
})