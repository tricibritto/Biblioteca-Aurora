# 📚 Biblioteca Aurora API

## 📖 Sobre o Projeto

A Biblioteca Aurora API é uma API REST desenvolvida utilizando Node.js e Express para o gerenciamento de livros e autores de uma biblioteca.

O sistema permite cadastrar, consultar, atualizar e remover informações relacionadas aos livros e seus respectivos autores, aplicando conceitos fundamentais de desenvolvimento backend e organização de projetos.

---

## 🎯 Objetivo da API

Desenvolver uma API REST para gerenciamento de livros e autores, utilizando uma arquitetura organizada em rotas e controllers, facilitando a manutenção e expansão futura do sistema.

---

## 👤 Integrante

* Trícia de Britto Matos

---

## 🗂️ Entidades do Sistema

### 📚 Livros

| Campo          | Tipo         |
| -------------- | ------------ |
| id             | INT          |
| titulo         | VARCHAR(150) |
| autor          | VARCHAR(100) |
| genero         | VARCHAR(50)  |
| editora        | VARCHAR(100) |
| ano_publicacao | INT          |
| quantidade     | INT          |

### ✍️ Autores

| Campo           | Tipo         |
| --------------- | ------------ |
| id              | INT          |
| nome            | VARCHAR(100) |
| nacionalidade   | VARCHAR(50)  |
| data_nascimento | DATE         |
| email           | VARCHAR(100) |
| biografia       | TEXT         |

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* MySQL
* Postman
* Git
* GitHub

---

## 📂 Estrutura do Projeto

```text
biblioteca-api/
│
├── src/
│   ├── controllers/
│   │   ├── livrosController.js
│   │   └── autoresController.js
│   │
│   ├── routes/
│   │   ├── livrosRoutes.js
│   │   └── autoresRoutes.js
│   │
│   └── database/
│
├── prints/
│
├── database.sql
├── README.md
├── server.js
├── package.json
├── .env
└── .gitignore
```

---

## 🔗 Endpoints Desenvolvidos

### 📚 Livros

| Método | Endpoint    | Descrição              |
| ------ | ----------- | ---------------------- |
| GET    | /livros     | Listar todos os livros |
| GET    | /livros/:id | Buscar livro por ID    |
| POST   | /livros     | Cadastrar livro        |
| PUT    | /livros/:id | Atualizar livro        |
| DELETE | /livros/:id | Remover livro          |

### ✍️ Autores

| Método | Endpoint     | Descrição               |
| ------ | ------------ | ----------------------- |
| GET    | /autores     | Listar todos os autores |
| GET    | /autores/:id | Buscar autor por ID     |
| POST   | /autores     | Cadastrar autor         |
| PUT    | /autores/:id | Atualizar autor         |
| DELETE | /autores/:id | Remover autor           |

---

## 🗄️ Banco de Dados

O banco de dados foi modelado em MySQL utilizando duas tabelas:

* autores
* livros

O script completo encontra-se no arquivo:

```text
database.sql
```

---

## 🧪 Evidências dos Testes

As evidências dos testes realizados encontram-se na pasta:

```text
prints/
```

### Estrutura do Projeto

* estrutura.png

### Banco de Dados MySQL

* mysql1.png
* mysql2.png

### Testes dos Endpoints de Livros

* postman-get-livros.png
* postman-get-livros-id.png
* postman-post-livros.png
* postman-put-livro1.png
* postman-delete-livro.png

### Testes dos Endpoints de Autores

* postman-get-autores.png
* postman-get-autores-id.png
* postman-post-autores.png
* postman-put-autor1.png
* postman-delete-autor.png

---

## ▶️ Como Executar o Projeto

### Instalar as dependências

```bash
npm install
```

### Executar o servidor

```bash
node server.js
```

O servidor será iniciado em:

```text
http://localhost:3000
```

---

## 📋 Métodos HTTP Testados

* GET
* POST
* PUT
* DELETE

Todos os métodos foram validados utilizando o Postman.

---

## 🌐 Repositório GitHub

Link do repositório:

```text
Adicionar aqui o link do GitHub após a publicação do projeto.
```
