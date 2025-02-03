exports.up = function (knex) {
    return knex.schema.table('permissions', (table) => {
      table.string('category').nullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('permissions', (table) => {
      table.dropColumn('category');
    });
  };
  