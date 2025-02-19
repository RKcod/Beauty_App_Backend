exports.up = function (knex) {
    return knex.schema.createTable("messages", (table) => {
      table.increments("id").primary();
      table.integer("conversation_id").unsigned().notNullable().references("id").inTable("conversations").onDelete("CASCADE");
      table.integer("sender_id").unsigned().notNullable().references("id").inTable("users").onDelete("CASCADE");
      table.text("content").nullable(); 
      table.boolean("is_read").defaultTo(false); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("messages");
  };
  