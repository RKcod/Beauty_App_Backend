const path = require('path');

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST || '127.0.0.1',
            user: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_NAME || 'beauty_app',
            port: process.env.DB_PORT || 5432,
        },
        migrations: {
            directory: path.resolve(__dirname, 'src/modules/migrations'), 
        },
        seeds: {
            directory: path.resolve(__dirname, 'src/modules/seeders'), // Par défaut pour les seeders globaux
        },
    },
};
