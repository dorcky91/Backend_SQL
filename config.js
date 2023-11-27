// Dependiendo la variable de entorno del sistema, se va a usar la configuración adecuada de base de datos

// Tomar la configuración del enterno de node, y si existe, usarla; Sino usar la configuración de desarrollo

const env = process.env.NODE_ENV || "development";

// env = 'developement'
const knexfile = require("./knexfile");
const knex = require("knex");

// Mandar a llamar la configuración correcta de knexfile
module.exports = knex(knexfile[env]);
