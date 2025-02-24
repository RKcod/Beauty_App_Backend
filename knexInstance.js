const Knex = require("knex");
const { Model } = require("objection");
const knexConfig = require("./knexfile");

const db = Knex(knexConfig.development);

// Attacher Knex à Objection.js
Model.knex(db);

module.exports = db;
