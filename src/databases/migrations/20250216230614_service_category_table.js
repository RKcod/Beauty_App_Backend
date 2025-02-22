const { table } = require("../../../knexInstance");

exports.up = function (knex) {
  return knex.schema.createTable("service_categories", (table) => {
    table.increments("id").primary();
    table.string("name").nullable();
    table.text("description").nullable();
    table.timestamp("created_at");
    table.timestamp("update_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropViewIfExists("service_categories");
};
