require("dotenv").config();
const express = require("express");
const productoRoutes = require("./routes/productoRoute");

const app = express();

/*Middleware */
app.use(express.urlencoded({ extended: true })); //Permite recibir datos especiales (como arrays) en el body
app.use(express.json()); //Middleware para trabajar con json

/*Routes */
app.use("/api/v1", productoRoutes);

/*Levantar el servidor */
app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
