exports.up = function (knex) {
    return knex.schema.table('users', (table) => {
      table
        .enum('user_type', ['visitor', 'owner', 'staff', 'admin'])
        .defaultTo('visitor')
        .notNullable();
      table
        .integer('shop_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('shops')
        .onDelete('SET NULL')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table('users', (table) => {
      // Supprimer les colonnes ajoutées dans la migration "up"
      table.dropColumn('user_type');
      table.dropColumn('shop_id');
    });
  };
  