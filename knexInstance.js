const knex = require("knex");
const knexConfig = require("./knexfile");

// Détecter l'environnement (local ou docker)
const environment = process.env.DB_ENV || "development";
console.log(`🛢️ Connecting to database in ${environment} mode...`);

const db = knex(knexConfig[environment]);

// Vérifier la connexion
db.raw("SELECT 1+1 AS result")
  .then(() => console.log(`✅ Successfully connected to ${knexConfig[environment].connection.database} on ${knexConfig[environment].connection.host}:${knexConfig[environment].connection.port}`))
  .catch((err) => {
    console.error("❌ Database connection error:", err.message);
    process.exit(1); // Arrête le serveur si la connexion échoue
  });

module.exports = db;
