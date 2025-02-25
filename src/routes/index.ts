import express from 'express';
import { Router } from 'express';

import * as PageController  from '../controllers/pageController'
import * as CommentController  from '../controllers/commentController'
import * as SearchController  from '../controllers/searchController'
import * as AddMovieController  from '../controllers/addMovieController'


const router = express.Router();

router.get('/', PageController.home)
router.get('/comedia', PageController.comedia)
router.get('/drama', PageController.drama)
router.get('/romance', PageController.romance)

router.get('/search', SearchController.search)


router.get('/comment/:name', CommentController.comment);

router.post('/addMovie', AddMovieController.addMovie)


export default router;