/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("ventas").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("ventas", function (table) {
        table.increments("venta_id").primary();
        table.integer("producto_id");
        table.integer("cliente_id");
        table.integer("cantidad");
        table.foreign("producto_id").references("productos");
        table.foreign("cliente_id").references("clientes");
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable("ventas").then(function (exists) {
    if (exists) {
      return knex.schema.dropTable("ventas");
    }
  });
};
