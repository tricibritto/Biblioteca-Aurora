const livros = [
    {
        id: 1,
        titulo: "A Biblioteca da Meia-Noite",
        autor: "Matt Haig",
        genero: "Ficção",
        editora: "Bertrand Brasil",
        ano_publicacao: 2021,
        quantidade: 10
    }
];

exports.listarLivros = (req, res) => {
    res.json(livros);
};

exports.buscarLivro = (req, res) => {
    const id = parseInt(req.params.id);

    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        });
    }

    res.json(livro);
};

exports.cadastrarLivro = (req, res) => {
    const novoLivro = {
        id: livros.length + 1,
        ...req.body
    };

    livros.push(novoLivro);

    res.status(201).json({
        mensagem: "Livro cadastrado com sucesso",
        livro: novoLivro
    });
};

exports.atualizarLivro = (req, res) => {
    const id = parseInt(req.params.id);

    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        });
    }

    Object.assign(livro, req.body);

    res.json({
        mensagem: "Livro atualizado com sucesso",
        livro
    });
};

exports.removerLivro = (req, res) => {
    const id = parseInt(req.params.id);

    const indice = livros.findIndex(l => l.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Livro não encontrado"
        });
    }

    const livroRemovido = livros.splice(indice, 1);

    res.json({
        mensagem: "Livro removido com sucesso",
        livro: livroRemovido[0]
    });
};