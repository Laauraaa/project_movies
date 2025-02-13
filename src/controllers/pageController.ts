import { Request, Response } from 'express'; 
import { Movie } from '../data/dataMovies';

export const home = (req: Request, res: Response) =>{
    let list = Movie.getAll()
    
    res.render('pages/index', { list })
    

};

export const comedia = (req: Request, res: Response) =>{
    let list = Movie.getType('comedy')
    res.render('pages/index', { list })
};

export const drama = (req: Request, res: Response) =>{
    let list = Movie.getType('drama')
    res.render('pages/index', { list })
};

export const romance = (req: Request, res: Response) =>{
    let list = Movie.getType('romance')
    res.render('pages/index', { list })
};