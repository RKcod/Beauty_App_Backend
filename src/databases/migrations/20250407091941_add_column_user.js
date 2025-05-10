exports.up = function (knex) {
    return knex.schema.table("staffs", (table) => {
      table.string("name").defaultTo('Default Name').notNullable();
      table.string("email").defaultTo('default@example.com').notNullable();
      table.string("phone").defaultTo('0000000000').notNullable();
      table.text("address").defaultTo('Default Address').notNullable();
      table.string("city").defaultTo('Default City').notNullable();
      table.string("activity_domain").defaultTo('Default Activity').notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table("staffs", (table) => {
      table.dropColumn("name");
      table.dropColumn("email");
      table.dropColumn("phone");
      table.dropColumn("address");
      table.dropColumn("city");
      table.dropColumn("activity_domain");
    });
  };
  