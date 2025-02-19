exports.up = function (knex) {
    return knex.schema.createTable("conversations", (table) => {
      table.increments("id").primary();
      table.integer("shop_id").unsigned().nullable().references("id").inTable("shops").onDelete("CASCADE");
      table.integer("user1_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE");
      table.integer("user2_id").unsigned().nullable().references("id").inTable("users").onDelete("CASCADE");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("conversations");
  };
  