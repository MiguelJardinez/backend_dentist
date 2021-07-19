import {Request, Response, NextFunction} from 'express';
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

export const verifyPatientTokenMid = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;
  if (!token) {
    res.json({mensaje: 'token invalido'});
  }
  const userData = verifyToken(token);
  if (!userData) return;

  req.paciente = userData;
  next();
};