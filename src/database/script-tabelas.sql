-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE doubleM;

USE doubleM;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	genero_musical VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table questionario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	resultado VARCHAR(150),
	personalidade VARCHAR(150),
	trap_recomendado VARCHAR(150),
	estilo_de_roupas VARCHAR(150),
	dt_questionario DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

INSERT INTO usuario (nome, email, senha)
VALUES 
('Matheus', 'matheus@email.com', '123'),
('Ana', 'ana@email.com', '123'),
('Lucas', 'lucas@email.com', '123'),
('Julia', 'julia@email.com', '123');

INSERT INTO questionario 
(resultado, personalidade, trap_recomendado, estilo_de_roupas, fk_usuario)
VALUES 
('Trap', 'Extrovertido / Irritado', 'Matuê - Maquina do Tempo', 'Streetwear', 1),
('Rock', 'Intenso / Sentimental', 'Os Nana - Surfar no Beat', 'All Black', 2),
('Pop', 'Comunicativo / Eufórico', 'Slayr - Sloppy Joe', 'Casual Moderno', 3),
('Samba', 'Carismático / Carente', 'Orochi - Amor de Fim de Noite', 'Roupas de Verão', 4);
