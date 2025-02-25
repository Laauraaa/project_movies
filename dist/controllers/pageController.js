"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.romance = exports.drama = exports.comedia = exports.home = void 0;
const dataMovies_1 = require("../data/dataMovies");
const home = (req, res) => {
    let list = dataMovies_1.Movie.getAll();
    res.render('pages/index', { list });
};
exports.home = home;
const comedia = (req, res) => {
    let list = dataMovies_1.Movie.getType('comedy');
    res.render('pages/index', { list });
};
exports.comedia = comedia;
const drama = (req, res) => {
    let list = dataMovies_1.Movie.getType('drama');
    res.render('pages/index', { list });
};
exports.drama = drama;
const romance = (req, res) => {
    let list = dataMovies_1.Movie.getType('romance');
    res.render('pages/index', { list });
};
exports.romance = romance;
