'use strict'
const fs = require('fs')
module.exports = (app, options) => {
  app.get('/songs/:id', (req, res) => {
    const { id } = req.params
    let song = `songs/${id}.mp3`
    let stat = fs.statSync(song)
    const range = req.headers.range
    let readStream

    if (range !== undefined) {
      const parts = range.replace(/bytes=/, '').split('-')

      const partialStart = parts[0]
      const partialEnd = parts[1]

      if ((isNaN(partialStart) && partialStart.length > 1) || (isNaN(partialEnd) && partialEnd.length > 1)) {
        return res.sendStatus(500) // ERR_INCOMPLETE_CHUNKED_ENCODING
      }

      const start = parseInt(partialStart, 10)
      const end = partialEnd ? parseInt(partialEnd, 10) : stat.size - 1
      const contentLength = (end - start) + 1

      res.status(206).header({
        'Content-Type': 'audio/mpeg',
        'Content-Length': contentLength,
        'Content-Range': 'bytes ' + start + '-' + end + '/' + stat.size
      })

      readStream = fs.createReadStream(song, { start: start, end: end })
    } else {
      res.header({
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
      })
      readStream = fs.createReadStream(song, null)
    }
    readStream.pipe(res)
  })
}
