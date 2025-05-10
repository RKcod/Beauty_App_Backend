exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users") // Assurez-vous que la table "users" existe
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("shop_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("shops") // Assurez-vous que la table "shops" existe
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.float("rating").notNullable();
    table.text("comment").nullable();
    table.timestamps(true, true); // Crée "created_at" et "updated_at"
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reviews");
};
