import { Request, Response } from 'express'; 
import { Movie } from '../data/dataMovies';
import { Genre } from '../data/dataMovies'; 
import { data } from '../data/dataMovies'




export const addMovie = (req: Request, res: Response)  =>{
   

    const { name, genre, image, comment } = req.body;

    

    const validGenres: Genre[] = ['romance', 'comedy', 'drama', 'other'];
    const genres: Genre[] = (Array.isArray(genre) ? genre : [genre])
        .filter((g): g is Genre => validGenres.includes(g));

 
    const newMovie = {
        name, 
        type: genres,
        image,
        comment: [...comment] 
    };


    Movie.addMovie(newMovie);
    console.log(data);
    res.sendStatus(201);


    
};
