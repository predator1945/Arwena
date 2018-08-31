'use strict'

module.exports = (app, options) => {
    const {repo} = options;

    app.get('/upload', (req, res) => {
        repo.uploadFile(req.query.name);
    });
    
}