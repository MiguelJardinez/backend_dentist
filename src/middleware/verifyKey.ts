import {Request, Response, NextFunction} from 'express';


export const verifyKey = (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers['x-access-key'];
  if (key?.toString() !== process.env.SECRET_KEY?.toString()) {
    res.status(401).json({
      mensaje: 'Apikey incorrecta'
    });
  }
  next();
}