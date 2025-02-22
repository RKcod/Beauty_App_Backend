exports.up = function (knex) {
  return knex.schema.createTable("services", (table) => {
    table.increments("id").primary();
    table
      .integer("shop_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("shops")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("name", 255);
    table.text("description").nullable();
    table.decimal("price", 8, 2).nullable();
    table.integer("duration").nullable();
    table.timestamp("created_at");
    table.timestamp("update_at");
  });
};

exports.down = function (knex) {
  return knex.schema.dropViewIfExists("services");
};
