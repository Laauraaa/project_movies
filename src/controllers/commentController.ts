import { Request, Response } from 'express'; 
import { data } from '../data/dataMovies'
import { Movie } from '../data/dataMovies';


export const comment = (req: Request, res: Response) =>{

    const movieName = req.params.name;
    const movie = Movie.getName(movieName)[0];

    res.render('pages/pageComment', { movie });
};

