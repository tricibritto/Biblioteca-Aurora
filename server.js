const express = require("express");

const livrosRoutes = require("./src/routes/livrosRoutes");
const autoresRoutes = require("./src/routes/autoresRoutes");

const app = express();

app.use(express.json());

app.use("/livros", livrosRoutes);
app.use("/autores", autoresRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});