const Minio = require('minio')


const connect = (settings, mediator) => {
    mediator.once('boot.ready', () => {
        const client = null;
        client = Minio.Client(settings);

        if(client !== null) {
            mediator.emit('minio.ready', client);
        } else {
            mediator.emit('minio.err', null);
        }
    })
}

module.exports = Object.assign({}, {connect})
