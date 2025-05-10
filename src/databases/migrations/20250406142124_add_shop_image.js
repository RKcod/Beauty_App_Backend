exports.up = function (knex) {
  return knex.schema.Table("shops", (table) => {
    table.string("image").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.Table("shops", (table) => {
    table.dropColumn("image");
  });
};
