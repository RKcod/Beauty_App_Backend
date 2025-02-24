exports.up = function (knex) {
  return knex.schema.createTable("staffs", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("shop_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("shops")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.enu("role", ["admin", "manager", "staff"], {
      useNative: true,
      enumName: "role_enum",
    });

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("staffs");
};
