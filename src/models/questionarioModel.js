var database = require("../database/config");

function buscarPorUsuario(usuarioId) {
    console.log("ACESSEI O QUESTIONARIO MODEL \n \n\t\t >> function buscarPorUsuario(): ", usuarioId);
    var instrucaoSql = `
        SELECT * FROM questionario
        WHERE fk_usuario = ${usuarioId}
        ORDER BY data_resposta DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(
    perfilResultado,
    compatibilidadeEstilo,
    horarioMusica,
    estiloRoupa,
    fkUsuario
) {
    console.log("ACESSEI O QUESTIONARIO MODEL \n \n\t\t >> function cadastrar(): ", perfilResultado, fkUsuario);
    var instrucaoSql = `
        INSERT INTO questionario (
            perfil_resultado,
            compatibilidade_estilo,
            horario_musica,
            estilo_roupa,
            fk_usuario
        ) VALUES (
            '${perfilResultado}',
            '${compatibilidadeEstilo}',
            '${horarioMusica}',
            '${estiloRoupa}',
            ${fkUsuario}
        );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEstatisticasPerfil() {
    var instrucaoSql = `
        SELECT perfil_resultado, COUNT(*) as total
        FROM questionario
        WHERE perfil_resultado IS NOT NULL
        GROUP BY perfil_resultado;
    `;
    return database.executar(instrucaoSql);
}

function buscarEstatisticasEstiloRoupa() {
    var instrucaoSql = `
        SELECT estilo_roupa, COUNT(*) as total
        FROM questionario
        WHERE estilo_roupa IS NOT NULL
        GROUP BY estilo_roupa;
    `;
    return database.executar(instrucaoSql);
}

function buscarEstatisticasHorario() {
    var instrucaoSql = `
        SELECT horario_musica, COUNT(*) as total
        FROM questionario
        WHERE horario_musica IS NOT NULL
        GROUP BY horario_musica;
    `;
    return database.executar(instrucaoSql);
}

function buscarEstatisticasCompatibilidade() {
    var instrucaoSql = `
        SELECT compatibilidade_estilo, COUNT(*) as total
        FROM questionario
        WHERE compatibilidade_estilo IS NOT NULL
        GROUP BY compatibilidade_estilo;
    `;
    return database.executar(instrucaoSql);
}

function buscarEstatisticasGeneroMusical() {
    var instrucaoSql = `
        SELECT genero_musical, COUNT(*) as total
        FROM usuario
        WHERE genero_musical IS NOT NULL
        GROUP BY genero_musical;
    `;
    return database.executar(instrucaoSql);
}

function buscarTotalRespostas() {
    var instrucaoSql = `
        SELECT COUNT(*) as total FROM questionario;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPorUsuario,
    cadastrar,
    buscarEstatisticasPerfil,
    buscarEstatisticasEstiloRoupa,
    buscarEstatisticasHorario,
    buscarEstatisticasCompatibilidade,
    buscarEstatisticasGeneroMusical,
    buscarTotalRespostas
};