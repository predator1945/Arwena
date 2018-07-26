

module.exports = (app, options) => {
    const { repo } = options;


    app.get('/api/admin/artists', (req, res, next) => {
        repo.getAllArtists().then(res => console.log(res))
        repo.getAllArtists()
            .then(artists => {res.json(artists)})
            .catch(next)
    })

    app.post('/api/admin/artists', (req, res, next) => {
        console.log(req.body)
        repo.addArtist({name: req.body.name})
            .then(info => res.json(info.insertedId))
            .catch(next)
    })

    app.get('*', (req, res) => {
        res.json({ msg: "ok" })
    })
}
