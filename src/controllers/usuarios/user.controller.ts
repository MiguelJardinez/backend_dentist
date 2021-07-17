import {Request, Response} from 'express';
import {
  getUserById
} from '../../dao/user.dao';
import { UserIT } from '../../models/user.model';

export const obtenerPerfil = async (req: Request, res: Response) => {
  const id = req.usuario;
  try {
    const usuario = await getUserById(id?.id!);
    res.json({
      mensaje: 'Usuario encontrado',
      usuario,
    });
  } catch (error) {
    console.log('No se pudo obtener el usuario');
    console.log(error);
  }
}

export const obtenerTrabajos = (req: Request, res: Response) => {

}

export const agregarTrabajo = (req: Request, res: Response) => {

}

export const actualizarPerfil = (req: Request, res: Response) => {

}

export const actualizarTrabajo = (req: Request, res: Response) => {

}

export const eliminarTrabajo = (req: Request, res: Response) => {

}
