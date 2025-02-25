"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovie = void 0;
const dataMovies_1 = require("../data/dataMovies");
const addMovie = (req, res) => {
    const { name, genre, image, comment } = req.body;
    // Validação: Verifica se todos os campos foram preenchidos
    if (!name || !genre || !image || !comment || !comment[0].name || !comment[0].text) {
        return res.status(400).json({ error: "Todos os campos devem ser preenchidos corretamente!" });
    }
    // Criando um novo objeto de filme
    const newMovie = {
        name,
        type: genre,
        image,
        comment: [...comment] // Garante que os comentários sejam adicionados corretamente
    };
    // Adicionando o novo filme ao array `data`
    dataMovies_1.Movie.addMovie(newMovie);
    // Retornando uma resposta de sucesso
    return res.status(201).json({
        message: "Filme adicionado com sucesso!",
        movie: newMovie
    });
};
exports.addMovie = addMovie;
