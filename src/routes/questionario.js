var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

router.get("/estatisticas", function (req, res) {
    questionarioController.buscarEstatisticas(req, res);
});

router.get("/:usuarioId", function (req, res) {
    questionarioController.buscarPorUsuario(req, res);
});

router.post("/cadastrar", function (req, res) {
    questionarioController.cadastrar(req, res);
});

module.exports = router;