exports.up = function (knex) {
    return knex.schema.createTable("role_permissions", (table) => {
      table.increments("id").primary(); 
      table
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("roles") 
        .onDelete("CASCADE") 
        .onUpdate("CASCADE"); 
      table
        .integer("permission_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("permissions") 
        .onDelete("CASCADE") 
        .onUpdate("CASCADE"); 
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("role_permissions");
  };
  