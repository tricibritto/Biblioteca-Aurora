const autores = [
    {
        id: 1,
        nome: "Matt Haig",
        nacionalidade: "Britânica",
        data_nascimento: "1975-07-03",
        email: "matthaig@email.com",
        biografia: "Autor de A Biblioteca da Meia-Noite."
    }
];

exports.listarAutores = (req, res) => {
    res.json(autores);
};

exports.buscarAutor = (req, res) => {
    const id = parseInt(req.params.id);

    const autor = autores.find(a => a.id === id);

    if (!autor) {
        return res.status(404).json({
            mensagem: "Autor não encontrado"
        });
    }

    res.json(autor);
};

exports.cadastrarAutor = (req, res) => {
    const novoAutor = {
        id: autores.length + 1,
        ...req.body
    };

    autores.push(novoAutor);

    res.status(201).json({
        mensagem: "Autor cadastrado com sucesso",
        autor: novoAutor
    });
};

exports.atualizarAutor = (req, res) => {
    const id = parseInt(req.params.id);

    const autor = autores.find(a => a.id === id);

    if (!autor) {
        return res.status(404).json({
            mensagem: "Autor não encontrado"
        });
    }

    Object.assign(autor, req.body);

    res.json({
        mensagem: "Autor atualizado com sucesso",
        autor
    });
};

exports.removerAutor = (req, res) => {
    const id = parseInt(req.params.id);

    const indice = autores.findIndex(a => a.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Autor não encontrado"
        });
    }

    const autorRemovido = autores.splice(indice, 1);

    res.json({
        mensagem: "Autor removido com sucesso",
        autor: autorRemovido[0]
    });
};