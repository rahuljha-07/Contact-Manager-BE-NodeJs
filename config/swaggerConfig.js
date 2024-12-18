const swaggerJSDoc = require('swagger-jsdoc');
const dotenv = require('dotenv');

dotenv.config();

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'My API Documentation',
        version: '1.0.0',
        description: 'API documentation for Contacts and Users APIs',
    },
    servers: [
        {
            url: `${process.env.URL}:${process.env.PORT}`,
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
