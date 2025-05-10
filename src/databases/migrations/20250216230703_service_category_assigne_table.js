
exports.up = function (knex) {
  return knex.schema.createTable("service_category_assignements", (table) => {
    table.increments("id").primary();
    table
      .integer("service_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("services")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("category_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("service_categories")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      table.timestamps(true, true);

  });
};


exports.down = function (knex) {
   return knex.schema.dropTableIfExists("service_category_assignements");
};
