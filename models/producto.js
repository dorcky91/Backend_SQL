// El modelo trae los datos de la base de datos
// NO se encarga de validar datos, ni de resolver promesas

// Paso #1 Necesito traer la configuración del entorno de knex y los detalles de la conexión a la base de datos
const knex = require("../config");

// Paso #2 Crear una función que me permita insertar un registro en la tabla productos
const create = (body) => {
  return knex
    .insert(body) //¡Qué datos voy a insertar?
    .into("productos") //¿En qué tabla? - productos
    .returning([
      "producto_id",
      "nombre",
      "descripcion",
      "precio",
      "sku",
      "active",
      "crear_el",
    ]); //¿Qué quiero que me regrese?
};

const findAll = () => {
  return knex.select("*").from("productos").where("active", true); //Traemos solo los campos a los que no hayamos hecho soft delete
};

const findOneProducto = (productoId) => {
  return knex
    .select([
      "producto_id",
      "nombre",
      "descripcion",
      "precio",
      "sku",
      "active",
      "crear_el",
    ])
    .from("productos")
    .where({ producto_id: productoId })
    .where("active", true);
};

const actualizar = (productoId, body) => {
  return knex
    .update(body) //¡Qué datos voy a insertar?
    .from("productos") //¿En qué tabla? - productos
    .where({ producto_id: productoId })
    .returning([
      "producto_id",
      "nombre",
      "descripcion",
      "precio",
      "sku",
      "active",
      "crear_el",
    ]); //¿Qué quiero que me regrese?
};

/*Voy a borrar un registro de manera real de la base de datos  */
const eliminarProducto = (productoId) => {
  return knex
    .del() //delete
    .from("productos")
    .where({ producto_id: productoId });
};

/*Borrador lógico, solo cambio active de true a false */
const suspenderProducto = (productoId) => {
  return knex
    .update({ active: false })
    .from("productos")
    .where({ producto_id: productoId });
};

module.exports = {
  create,
  findAll,
  findOneProducto,
  actualizar,
  eliminarProducto,
  suspenderProducto,
};
