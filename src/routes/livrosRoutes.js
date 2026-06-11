const express = require("express");
const router = express.Router();

const {
    listarLivros,
    buscarLivro,
    cadastrarLivro,
    atualizarLivro,
    removerLivro
} = require("../controllers/livrosController");

router.get("/", listarLivros);
router.get("/:id", buscarLivro);
router.post("/", cadastrarLivro);
router.put("/:id", atualizarLivro);
router.delete("/:id", removerLivro);

module.exports = router;