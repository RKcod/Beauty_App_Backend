exports.up = function (knex) {
    return knex.schema.table('conversations', (table) => {
      table
        .integer('last_message_id')
        .unsigned()
        .references('id')
        .inTable('messages')
        .onDelete('SET NULL')
        .nullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('conversations', (table) => {
      table.dropColumn('last_message_id');
    });
  };
  