exports.up = function (knex) {
    return knex.schema.createTable("roles", (table) => {
      table.increments("id").primary();
      table.string("slug").notNullable();
      table.string("name").notNullable();
      table.string("description").nullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("roles");
  };
  