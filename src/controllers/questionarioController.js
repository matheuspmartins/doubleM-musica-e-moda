var aquarioModel = require("../models/questionarioModel");

function buscarPorUsuario(req, res) {
  var usuarioId = req.params.usuarioId;

  questionarioModel.PorUsuario(usuarioId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os questionarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var perfilResultado = req.body.perfilResultadoServer;
  var fkUsuario = req.body.fkUsuarioServer;

  if (descricao == undefined) {
    res.status(400).send("perfilResultado está undefined!");
  } else if (usuarioId == undefined) {
    res.status(400).send("fkUsuario está undefined!");
  } else {


    questionarioModel.cadastrar(perfilResultado, fkUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarPorUsuario,
  cadastrar
}