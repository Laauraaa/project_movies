import { Request, Response } from 'express'; 

export const comment = (req: Request, res: Response) =>{
    res.render('pages/pageComment')
};