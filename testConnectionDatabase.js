const knex = require('knex');
const knexConfig = require('./knexfile'); // Importez votre configuration Knex
require('dotenv').config(); // Charger le fichier .env si nécessaire

// Déboguer les variables de connexion
console.log('🔍 Configuration Knex :');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

if (typeof process.env.DB_PASSWORD !== 'string') {
    console.error('❌ DB_PASSWORD n\'est pas une chaîne !', typeof process.env.DB_PASSWORD);
    process.exit(1);
}

// Initialisez Knex avec la configuration
const db = knex(knexConfig.development);

// Testez la connexion à la base de données
db.raw('SELECT 1')
    .then(() => {
        console.log('✅ La connexion à la base de données est réussie !');
        process.exit(0); // Quittez le script après le succès
    })
    .catch((err) => {
        console.error('❌ Erreur de connexion à la base de données :', err.message);
        console.error('Détails de l\'erreur :', err);
        process.exit(1); // Quittez le script en cas d'erreur
    });
