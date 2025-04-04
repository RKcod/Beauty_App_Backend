exports.up = function (knex) {
    return knex.schema.table('services', (table) => {
      table.string('image').nullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('services', (table) => {
      table.dropColumn('image');
    });
  };