'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });
console.log('helo');

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
    method: 'GET',
    path: '/picture.jpg',
    handler: {
        file: 'picture.jpg'
    }
});

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
          // return reply('helo');
            reply.file('index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/index.css',
        handler: function (request, reply) {
          // return reply('helo');
            reply.file('index.css');
        }
    });

    server.route({
        method: 'GET',
        path: '/index.js',
        handler: function (request, reply) {
          // return reply('helo');
            reply.file('index.js');
        }
    });


    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);
    });
});
