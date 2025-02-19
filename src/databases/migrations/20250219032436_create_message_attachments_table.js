exports.up = function (knex) {
    return knex.schema.createTable("message_attachments", (table) => {
      table.increments("id").primary();
      table.integer("message_id").unsigned().notNullable().references("id").inTable("messages").onDelete("CASCADE");
      table.string("file_url").notNullable(); 
      table.string("file_type").notNullable(); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("message_attachments");
  };
  