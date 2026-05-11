var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/questionarioController");

router.get("/:usuarioId", function (req, res) {
  questionarioController.buscarPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  questionarioController.cadastrar(req, res);
})

module.exports = router;