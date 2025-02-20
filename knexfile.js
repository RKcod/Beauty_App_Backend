const path = require('path');
require('dotenv').config();
module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER ,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },
        migrations: {
            directory: path.resolve(__dirname, 'src/databases/migrations'),
        },
        seeds: {
            directory: path.resolve(__dirname, 'src/databases/seeders'),
        },
    },
};
