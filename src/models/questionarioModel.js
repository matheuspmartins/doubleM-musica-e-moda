const { buscarAquariosPorUsuario } = require("../controllers/questionarioController");
var database = require("../database/config");

function buscarAquariosPorEmpresa(id) {

  var instrucaoSql = `SELECT * FROM questionario q WHERE fk_usuario = ${id}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(id, descricao) {

  var instrucaoSql = `INSERT INTO (fk_empresa) questionario VALUES (${id})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorUsuario,
  cadastrar
}
