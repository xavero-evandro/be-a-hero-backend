exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();
    table.string("ngo_id").notNullable();

    table
      .foreign("ngo_id")
      .references("id")
      .inTable("ngos");

    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
