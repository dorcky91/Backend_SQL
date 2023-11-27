/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("productos").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("productos", function (table) {
        table.increments("producto_id").primary();
        table.string("nombre").notNullable();
        table.text("descripcion");
        table.decimal("precio", 12, 2);
        table.string("sku");
        table.boolean("active").defaultTo(true);
        table.timestamp("crear_el").defaultTo(knex.fn.now());
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable("productos").then(function (exists) {
    if (exists) {
      return knex.schema.dropTable("productos");
    }
  });
};
