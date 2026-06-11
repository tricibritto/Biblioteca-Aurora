# 📚 Biblioteca Aurora API

## 📖 Sobre o Projeto

A Biblioteca Aurora API é uma API REST desenvolvida com Node.js e Express para o gerenciamento de livros e autores de uma biblioteca.

O sistema permite cadastrar, consultar, atualizar e remover informações de livros e autores, seguindo uma arquitetura organizada em rotas e controllers para facilitar a manutenção e futuras expansões.

---

## 🎯 Objetivo da API

Desenvolver uma API REST para gerenciamento de livros e autores, aplicando os conceitos de:

* Node.js
* Express.js
* Rotas (Routes)
* Controllers
* Métodos HTTP
* Estruturação de projetos backend
* Banco de Dados Relacional

---

## 👥 Integrante

* Trícia de Britto Matos

---

## 🗂️ Entidades do Sistema

### 📚 Livros

* id
* titulo
* autor
* genero
* editora
* ano_publicacao
* quantidade

### ✍️ Autores

* id
* nome
* nacionalidade
* data_nascimento
* email
* biografia

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

O banco de dados foi modelado utilizando MySQL.

Tabelas criadas:

* autores
* livros

O script de criação encontra-se no arquivo:

```text
database.sql
```

---

## 🧪 Evidências dos Testes

Os testes foram realizados utilizando o Postman e as evidências encontram-se na pasta:

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

## 📋 Métodos HTTP Utilizados

* GET
* POST
* PUT
* DELETE

---

## 🌐 Repositório GitHub

https://github.com/tricibritto/Biblioteca-Aurora
