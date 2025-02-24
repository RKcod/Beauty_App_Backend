const { table } = require("../../../knexInstance");

exports.up = function (knex) {
  return knex.schema.createTable("service_categories", (table) => {
    table.increments("id").primary();
    table.string("name").nullable();
    table.text("description").nullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("service_categories");
};
