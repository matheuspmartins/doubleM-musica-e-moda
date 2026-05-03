var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/usuarioController");

router.get("/:empresaId", function (req, res) {
  usuarioController.buscarAquariosPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
  usuarioController.cadastrar(req, res);
})

module.exports = router;