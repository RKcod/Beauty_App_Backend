exports.up = function (knex) {
    return knex.schema.alterTable('shops', (table) => {
      table.string('image').nullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable('shops', (table) => {
      table.dropColumn('image');
    });
  };
  