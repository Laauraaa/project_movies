import { Request, Response } from 'express'; 
import { Movie } from '../data/dataMovies';


export const search = (req: Request, res: Response) =>{
    let query: string = req.query.q as string ;
    
    let list = Movie.getName(query);
   

    res.render('pages/index', { list, query })


};