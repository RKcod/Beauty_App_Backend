exports.up = function (knex) {
  return knex.schema.createTable("staffs", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("phone").notNullable();
    table.text("address").notNullable();
    table.string("city").notNullable();
    table.string("activity_domain").notNullable();
    table
      .integer("shop_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("shops")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      table.enu('role', ['admin', 'manager', 'staff']).notNullable(); // Utilisation du type enum existant


    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("staffs");
};
