import {Request, Response, NextFunction} from 'express';
import {verifyToken} from '../utils/token';

export const verifyTokenMid = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'];
  console.log('token', token);
  res.json({
    mensaje: 'Revisando token',
  });
};