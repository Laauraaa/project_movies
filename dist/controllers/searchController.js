"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const dataMovies_1 = require("../data/dataMovies");
const search = (req, res) => {
    let query = req.query.q;
    let list = dataMovies_1.Movie.getName(query);
    res.render('pages/index', { list, query });
};
exports.search = search;
