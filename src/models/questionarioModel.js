const { buscarAquariosPorUsuario } = require("../controllers/questionarioController");
var database = require("../database/config");

function buscarPorUsuario(usuarioId) {

  var instrucaoSql = `SELECT * FROM questionario q WHERE fk_usuario = ${id}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(perfilResultado, fkUsuario) {
    var instrucaoSql = `INSERT INTO questionario (perfil_resultado, fk_usuario) VALUES ('${perfilResultado}', ${fkUsuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
  buscarPorUsuario,
  cadastrar
}
