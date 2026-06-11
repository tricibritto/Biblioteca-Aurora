# 📚 Biblioteca Aurora API

API REST desenvolvida para gerenciamento de livros e autores, permitindo operações completas de cadastro, consulta, atualização e remoção de dados utilizando Node.js, Express e MySQL.

## 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* MySQL
* Postman
* Dotenv

---

## 📂 Estrutura do Projeto

```text
biblioteca-aurora/
│
├── controllers/
├── models/
├── routes/
├── config/
├── prints/
├── .env
├── server.js
├── package.json
└── README.md
```

### Estrutura do Projeto

![Estrutura do Projeto](prints/estrutura.png)

---

## 🗄️ Banco de Dados MySQL

### Criação das Tabelas

![Banco de Dados 1](prints/mysql1.png)

### Registros Inseridos

![Banco de Dados 2](prints/mysql2.png)

---

## 📖 Testes dos Endpoints de Livros

### GET - Listar Livros

![GET Livros](prints/postman-get-livros.png)

### GET - Buscar Livro por ID

![GET Livro por ID](prints/postman-get-livros-id.png)

### POST - Cadastrar Livro

![POST Livro](prints/postman-post-livros.png)

### PUT - Atualizar Livro

![PUT Livro](prints/postman-put-livro1.png)

### DELETE - Remover Livro

![DELETE Livro](prints/postman-delete-livro.png)

---

## ✍️ Testes dos Endpoints de Autores

### GET - Listar Autores

![GET Autores](prints/postman-get-autores.png)

### GET - Buscar Autor por ID

![GET Autor por ID](prints/postman-get-autores-id.png)

### POST - Cadastrar Autor

![POST Autor](prints/postman-post-autores.png)

### PUT - Atualizar Autor

![PUT Autor](prints/postman-put-autor1.png)

### DELETE - Remover Autor

![DELETE Autor](prints/postman-delete-autor.png)

---

## 🔗 Endpoints Disponíveis

### Livros

| Método | Endpoint    |
| ------ | ----------- |
| GET    | /livros     |
| GET    | /livros/:id |
| POST   | /livros     |
| PUT    | /livros/:id |
| DELETE | /livros/:id |

### Autores

| Método | Endpoint     |
| ------ | ------------ |
| GET    | /autores     |
| GET    | /autores/:id |
| POST   | /autores     |
| PUT    | /autores/:id |
| DELETE | /autores/:id |

---

## 👩‍💻 Autora
Trícia Britto
Projeto desenvolvido para a disciplina de Desenvolvimento de APIs – SENAI.