

module.exports = (app, options) => {
    const { repo } = options;


    app.get('/api/admin/artists', (req, res, next) => {
        repo.getAllArtists()
            .then(artists => {res.json(artists)})
            .catch(next)
    })

    app.post('/api/admin/artists', (req, res) => {
        repo.addArtist(req.body.artist)
            .then(info => res.json(info))
    })

    app.get('*', (req, res) => {
        res.json({ msg: "ok" })
    })
}
