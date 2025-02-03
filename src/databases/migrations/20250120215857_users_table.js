exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('username').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('image').nullable();
        table.string('phone').nullable();
        table.string('address').nullable();
        table.string('city').nullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
