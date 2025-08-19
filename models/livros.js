const livrosController = require("../controllers/livrosController");
const DB = require("../db");

const livroModel = {
  getAll: async () => {
    const response = await DB.get("/livros");
    return response.data;
  },

  getById: async (id) => {
    const response = await DB.get(`/livros/${id}`);
    return response.data;
  },

  add: async (novoLivro) => {
    const response = await DB.post("/livros", novoLivro);
    return response.data;
  },

  update: async (id, livroAtualizado) => {
    const response = await DB.put(`/livros/${id}`, livroAtualizado);
    return response.data;
  }
};

module.exports = livroModel;