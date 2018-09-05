'use strict'

module.exports = (app, options) => {
    const {repo} = options;

    app.get('/upload', (req, res) => {
        repo.uploadFile(req.query.name)
        .then(({id, url}) => {
            console.log(id + "\n" + url)
            res.status(200).json({id, url})
        })
        
    });
    
}