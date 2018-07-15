

module.exports = (app, options) => {
    const { repo } = options;
    

    app.get('api/admin/artists', (req, res) => {
        repo.getAllArtists()
            .then(artists => res.json(artists))
    })

    app.post('api/admin/artists', (req, res) => {
        repo.addArtist(req.body.artist)
            .then(info => res.json(info))
    })

    app.get('*', (req, res) => {
        console.log(repo)
        repo.getAllArtists()
            .then(artists => console.log(artists))
         res.json({msg: "ok"})
    })
}
