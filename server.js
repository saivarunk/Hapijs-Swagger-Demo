const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Joi = require('joi');
const HapiSwagger = require('hapi-swagger');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3000
});

const options = {
    info: {
        'title': 'Test API Documentation',
        'version': '0.0.1',
    }
};

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], (err) => {
        server.start((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Server running at:', server.info.uri);
            }

            // returns sum
            server.route({
                path: '/api/add',
                method: 'POST',
                config: {
                    handler: (request, reply) => {
                        var sum = parseInt(request.payload.a) + parseInt(request.payload.b);
                        reply(sum);
                    },
                    description: 'Get algebraic sum',
                    notes: 'Pass two numbers as a & b and returns sum',
                    tags: ['api'],
                    validate: {
                        payload: {
                            a : Joi.number()
                                    .required(),
                            b : Joi.number()
                                    .required(),
                        }
                    }
                }
            });

            // returns difference
            server.route({
                path: '/api/diff',
                method: 'POST',
                config: {
                    handler: (request, reply) => {
                        var diff = parseInt(request.payload.a) - parseInt(request.payload.b);
                        reply(diff);
                    },
                    description: 'Get algebraic difference',
                    notes: 'Pass two numbers as a & b and returns difference',
                    tags: ['api'],
                    validate: {
                        payload: {
                            a : Joi.number()
                                    .required(),
                            b : Joi.number()
                                    .required(),
                        }
                    }
                }
            });

            // returns product
            server.route({
                path: '/api/prod',
                method: 'POST',
                config: {
                    handler: (request, reply) => {
                        var prod = parseInt(request.payload.a) * parseInt(request.payload.b);
                        reply(prod);
                    },
                    description: 'Get algebraic product',
                    notes: 'Pass two numbers as a & b and returns product',
                    tags: ['api'],
                    validate: {
                        payload: {
                            a : Joi.number()
                                    .required(),
                            b : Joi.number()
                                    .required(),
                        }
                    }
                }
            });

            // returns quotient
            server.route({
                path: '/api/div',
                method: 'POST',
                config: {
                    handler: (request, reply) => {
                        var div = parseInt(request.payload.a) / parseInt(request.payload.b);
                        reply(div);
                    },
                    description: 'Get algebraic division',
                    notes: 'Pass two numbers as a & b and returns quotient',
                    tags: ['api'],
                    validate: {
                        payload: {
                            a : Joi.number()
                                    .required(),
                            b : Joi.number()
                                    .required(),
                        }
                    }
                }
            });

            // returns remainder
            server.route({
                path: '/api/rem',
                method: 'POST',
                config: {
                    handler: (request, reply) => {
                        var rem = parseInt(request.payload.a) % parseInt(request.payload.b);
                        reply(rem);
                    },
                    description: 'Get algebraic remainder',
                    notes: 'Pass two numbers as a & b and returns remainder',
                    tags: ['api'],
                    validate: {
                        payload: {
                            a : Joi.number()
                                    .required(),
                            b : Joi.number()
                                    .required(),
                        }
                    }   
                }
            });
            
        });
});
