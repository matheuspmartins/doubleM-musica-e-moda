
var questionarioModel = require("../models/questionarioModel");

function buscarPorUsuario(req, res) {
    var usuarioId = req.params.usuarioId;

    questionarioModel.buscarPorUsuario(usuarioId)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {

    var perfilResultado = req.body.perfilResultadoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    var compatibilidadeEstilo = req.body.compatibilidadeEstiloServer;
    var horarioMusica = req.body.horarioMusicaServer;
    var estiloRoupa = req.body.estiloRoupaServer;

    if (perfilResultado == undefined || fkUsuario == undefined) {
        res.status(400).send("Dados obrigatórios ausentes!");
    } else {

        questionarioModel.cadastrar(
            perfilResultado,
            compatibilidadeEstilo,
            horarioMusica,
            estiloRoupa,
            fkUsuario
        )
            .then(function (resultado) {
                res.status(201).json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarPorUsuario,
    cadastrar
};