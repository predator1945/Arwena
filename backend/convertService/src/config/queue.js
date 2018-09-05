'use strict'
const amqp = require('amqplib/callback_api');

const getAdress = settings => `amqp://${settings.username}:${settings.password}@${settings.url}`

const connect = (settings, mediator) => {
    mediator.once('boot.ready', () => {
        let queue = null;
        amqp.connect(getAdress(settings), (err, conn) => {

            if (err !== null) mediator.emit('queue.err', err);

            conn.createChannel((err, ch) => {
                if (err !== null) mediator.emit('queue.err', err);
                ch.assertQueue(settings.name, { durable: true });
                queue = ch;

                if (queue !== null) {
                    mediator.emit('queue.ready', queue);
                } else {
                    mediator.emit('queue.err', null);
                }
            });
        });
    });
}
module.exports = Object.assign({}, { connect })
