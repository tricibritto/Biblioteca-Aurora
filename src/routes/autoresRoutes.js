const express = require("express");
const router = express.Router();

const {
    listarAutores,
    buscarAutor,
    cadastrarAutor,
    atualizarAutor,
    removerAutor
} = require("../controllers/autoresController");

router.get("/", listarAutores);
router.get("/:id", buscarAutor);
router.post("/", cadastrarAutor);
router.put("/:id", atualizarAutor);
router.delete("/:id", removerAutor);

module.exports = router;