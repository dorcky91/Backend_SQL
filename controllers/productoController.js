/*Los controladores tienen la lógica de negocio */
const modelsProductos = require("../models/producto");

const createProducto = (req, res) => {
  //Aquí yo debería crear mi producto
  //   res.send({
  //     message: "Home created (FAKE)",
  //   });
  modelsProductos
    .create(req.body)
    .then((result) => {
      res.status(201).send({ mensaje: "Producto fue creado", data: result });
    })
    .catch((error) => {
      res.status(400).send({ mensaje: "Error: producto no fue creado", error });
    });
};

const findAllProductos = (req, res) => {
  modelsProductos
    .findAll()
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((error) => {
      res.status(400).send({ mensaje: "Error: vuelve a intentarlo", error });
    });
};

const unProducto = (req, res) => {
  modelsProductos
    .findOneProducto(req.params.productoId)
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((error) => {
      res.status(400).send({ mensaje: "Error: vuelve a intentarlo", error });
    });
};

const actualizarProducto = (req, res) => {
  modelsProductos
    .actualizar(req.params.productoId, req.body)
    .then((result) => {
      res.status(200).send({ result });
    })
    .catch((error) => {
      res.status(400).send({ mensaje: "Error: error al actualizar", error });
    });
};

const eliminarUnProducto = (req, res) => {
  modelsProductos
    .eliminarProducto(req.params.productoId)
    .then((result) => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(400).send({ mensaje: "Error: vuelve a intentarlo", error });
    });
};

const suspenderUnProducto = (req, res) => {
  modelsProductos
    .suspenderProducto(req.params.productoId)
    .then((result) => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(400).send({ mensaje: "Error: vuelve a intentarlo", error });
    });
};

module.exports = {
  createProducto,
  findAllProductos,
  unProducto,
  actualizarProducto,
  suspenderUnProducto,
  eliminarUnProducto,
};
