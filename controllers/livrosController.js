const DB = require("../models/livros");

const livrosController = {
  listar: async (req, res) => {
    const todosLivros = await DB.getAll();
    res.render("livros/listar", { livros: todosLivros });
  },
  create: async (req, res) => {
    res.render("livros/create");
  },
  insert: async (req, res) => {
    const novoLivro = {
      titulo: req.body.titulo,
      autor: req.body.autor,
    };
    await DB.add(novoLivro);
    res.redirect("/livros");
  },
  editar: async (req, res) => {
    const livroId = req.params.id;
    const livro = await DB.getById(livroId);
    res.render("livros/editar", { livro });
  },
  atualizar: async (req, res) => {
    const livroId = req.params.id;
    const livroAtualizado = {
      titulo: req.body.titulo,
      autor: req.body.autor
    };
    await DB.update(livroId, livroAtualizado);
    res.redirect('/livros');
  }
};

module.exports = livrosController;
