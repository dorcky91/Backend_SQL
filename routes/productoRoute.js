const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

//Si la routa es /productos, entonces se ejecuta el controlador productoController.createproducto
router.post("/productos", productoController.createProducto);
router.get("/productos", productoController.findAllProductos);
router.get("/productos/:productoId", productoController.unProducto);
router.patch("/productos/:productoId", productoController.actualizarProducto);
router.delete(
  "/productos/suspenderUnProducto/:productoId",
  productoController.suspenderUnProducto
);
router.delete(
  "/productos/eliminarUnProducto/:productoId",
  productoController.eliminarUnProducto
);
module.exports = router;
