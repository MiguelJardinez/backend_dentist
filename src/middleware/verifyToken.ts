import {Request, Response, NextFunction} from 'express';
import {JwtPayload} from 'jsonwebtoken';
import {verifyToken} from '../utils/token';

 
export const verifyTokenMid = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;
  if (!token) {
    res.json({mensaje: 'token invalido'});
  }
  const userData = verifyToken(token);
  if (!userData) return;

  req.usuario = userData;
  next();
};
