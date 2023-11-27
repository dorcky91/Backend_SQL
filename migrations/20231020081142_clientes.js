/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable("clientes").then(function (exists) {
    if (!exists) {
      return knex.schema.createTable("clientes", function (table) {
        table.increments("cliente_id").primary();
        table.text("nombre").notNullable();
        table.text("apellidos").notNullable();
        table.text("email").notNullable().unique();
        table.text("telefono").notNullable().unique();
        table.text("direccion").notNullable();
        table.integer("codigo_postal").notNullable();
        table.text("barrio_colonia").notNullable();
        table.text("ciudad").notNullable();
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable("clientes").then(function (exists) {
    if (exists) {
      return knex.schema.dropTable("clientes");
    }
  });
};
