import {Request, Response} from 'express';
import {
  getUserById, handleError
} from '../../dao/user.dao';
import {
  createWork,
  deleteWork,
  findWorkByDentis,
  findWorkById,
  updateWork,
  compareWork
} from '../../dao/trabajos.dao';
import {
  addWorkProfile
} from '../../dao/user.dao';
import {UserIT} from '../../models/user.model';
import {TrabajoIT} from '../../models/trabajos.model';
import mongoose, { ObjectId, Schema } from 'mongoose';

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

export const obtenerTrabajos = async (req: Request, res: Response) => {
  const userId = req.usuario;
  try {
    const trabajos = await findWorkByDentis(userId?.id!);
    
    console.log(trabajos);
    res.json({
      mensaje: 'Se encontraron las tareas',
    })
  } catch (error) {
    console.log(error);
  }
}

export const agregarTrabajo = async (req: Request, res: Response) => {
  const dataWork = req.body as TrabajoIT;
  const usuarioId = req.usuario?.id!;

  const dataWorksend: TrabajoIT = {
    dentista: usuarioId,
    precio: dataWork?.precio,
    tratamiento: dataWork?.tratamiento,
  }

  try {
    //Creando el trabajo
    const newWork = await createWork(dataWorksend);

    //Actualizando el perfil para añadir nuevo trabajo
    await addWorkProfile(newWork!.tratamiento, newWork?.dentista!);

    res.json({mensaje: `Trabajo nuevo creado`});
  } catch (error) {
    console.log('No se pudo añadir la tarea');
    console.log(error);
  }
}


export const actualizarPerfil = (req: Request, res: Response) => {

}

export const actualizarTrabajo = async (req: Request, res: Response) => {
  const data = req.body;
  const idWork = req.params.id;
  const idUser = req.usuario!;

  //Revisar que el id es valido
  if (!mongoose.Types.ObjectId.isValid(idWork)) {
    handleError(res, 'El id no es valido');
    return
  }
  
  try {
    //Comparando que el dentista puede actualizar el trabajo
    const check = await compareWork(idWork, idUser.id);
    if (!check) {
      handleError(res, 'No puedes cambiar el trabajo');
    }

    //Actualizando el trabajo
    await updateWork(idWork, data);
    res.json({mensaje: 'Se ha actualizado el trabajo'});
  } catch (error) {
    console.log(error);
  }
}

export const eliminarTrabajo = async (req: Request, res: Response) => {
  const idWork = req.params.id;
  const idUser = req.usuario!;
  try {
    //Revisando que el id es valido
    if (!mongoose.Types.ObjectId.isValid(idWork)) {
      handleError(res, 'El id es invalido');
      return;
    }

    //Revisando que el dentista pueda eliminar el trabajo
    const check = await compareWork(idWork, idUser.id);
    if (!check) {
      handleError(res, 'No puedes eliminar el trabajo');
      return;
    }

    await deleteWork(idWork)
    res.json({
      mensaje: 'El trabajo se ha eliminado correctamente'
    });
  } catch (error) {
    console.log(error);
    res.json({
      mensaje: 'No se pudo eliminar el trabajo',
    })
  }
}
