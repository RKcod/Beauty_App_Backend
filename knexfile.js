const path = require('path');

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'db',
            user: process.env.DB_USER ,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
        },
        migrations: {
            directory: path.resolve(__dirname, 'src/databases/migrations'),
        },
        seeds: {
            directory: path.resolve(__dirname, 'src/databases/seeders'),
        },
    },
};
