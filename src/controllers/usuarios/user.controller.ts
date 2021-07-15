import {Request, Response} from 'express';
import {
  createUser, 
  deleteUser, 
  getAllUsers,
  getOneUser
} from '../../dao/user.dao';
import { UserIT } from '../../models/user.model';

export const crearUsuario = async (req: Request, res: Response) => {
  const usuario = req.body as UserIT;
  try {
    console.log('Creando a un nuevo usuario', usuario);
    const data = await createUser(usuario);
    console.log('Informacion del usuario', data);
    res.json({mensaje: 'Creando el usuario'});

  } catch (error) {
    console.log('No se pudo crear el usuario');
    res.status(401).json({mensaje: 'Hubo un problema'});
  }
} 

export const modificarUsuario = (req: Request, res: Response) => {

} 

export const eliminarUsuario = (req: Request, res: Response) => {

} 

export const obtenerUsuarios = (req: Request, res: Response) => {

} 

export const obtenerUnUsuario = (req: Request, res: Response) => {

} 