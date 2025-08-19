const express = require("express");

const route = express.Router();
const livrosController = require("../controllers/livrosController");

route.get("/", livrosController.listar);
route.get("/:id/editar", livrosController.editar);
route.get("/create", livrosController.create);
route.post("/", livrosController.insert);
route.post("/:id", livrosController.atualizar);

module.exports = route;
