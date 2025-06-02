exports.up = function(knex) {
  return knex.schema.createTable('appointments', function(table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.integer('shop_id').unsigned().notNullable();
    table.foreign('shop_id').references('id').inTable('shops').onDelete('CASCADE');
    table.timestamp('start_time').notNullable();
    table.timestamp('end_time').notNullable();
    table.string('status').notNullable().defaultTo('scheduled'); // e.g., scheduled, cancelled, completed
    table.timestamps(true, true); // Adds created_at and updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointments');
};
