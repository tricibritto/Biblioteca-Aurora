CREATE DATABASE biblioteca_aurora;
USE biblioteca_aurora;

CREATE TABLE autores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50) NOT NULL,
    data_nascimento DATE,
    email VARCHAR(100),
    biografia TEXT
);

CREATE TABLE livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150) NOT NULL,
    genero VARCHAR(50),
    editora VARCHAR(100),
    ano_publicacao INT,
    quantidade INT,
    autor_id INT,
    FOREIGN KEY (autor_id)
    REFERENCES autores(id)
);

INSERT INTO autores
(nome, nacionalidade, data_nascimento, email, biografia)
VALUES
(
'Matt Haig',
'Britânica',
'1975-07-03',
'matthaig@email.com',
'Escritor e jornalista britânico, autor de A Biblioteca da Meia-Noite.'
);

INSERT INTO livros
(titulo, genero, editora, ano_publicacao, quantidade, autor_id)
VALUES
(
'A Biblioteca da Meia-Noite',
'Ficção',
'Bertrand Brasil',
2021,
10,
1
);