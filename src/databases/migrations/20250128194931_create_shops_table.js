exports.up = function (knex) {
  return knex.schema.createTable("shops", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("phone").notNullable();
    table.text("address").notNullable();
    table.string("city").notNullable();
    table.string("activity_domain").notNullable();
    table
      .integer("owner_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("shops");
};
