const { default: axios } = require("axios");

const DB = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

module.exports = DB;