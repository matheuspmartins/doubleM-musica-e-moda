CREATE DATABASE doubleM;

USE doubleM;

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(80),
    email VARCHAR(120),
    senha VARCHAR(50),
    genero_musical VARCHAR(50)
);

CREATE TABLE questionario (
    id INT PRIMARY KEY AUTO_INCREMENT,

    perfil_resultado VARCHAR(60),

    compatibilidade_estilo VARCHAR(40),

    horario_musica VARCHAR(30),

    estilo_roupa VARCHAR(50),

    data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,

    fk_usuario INT,

    CONSTRAINT fkQuestionarioUsuario
        FOREIGN KEY (fk_usuario)
        REFERENCES usuario(id)
);