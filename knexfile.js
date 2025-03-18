const path = require('path');
require("dotenv").config(); 

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_NAME || "beauty_app_dev",
    },
    migrations: {
      directory: "./src/databases/migrations",
    },
    seeds: {
      directory: "./src/databases/seeders",
    },
  },

  docker: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "postgres", 
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "password",
      database: process.env.DB_NAME || "beauty_app_docker",
    },
    migrations: {
      directory: "./src/databases/migrations",
    },
    seeds: {
      directory: "./src/databases/seeders",
    },
  },
};

