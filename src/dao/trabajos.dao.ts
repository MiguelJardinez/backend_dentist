import { Schema } from 'mongoose';
import {Trabajos, TrabajoIT} from '../models/trabajos.model';

export const findWorkById = async (id: Schema.Types.ObjectId): Promise<TrabajoIT | null> => {
  try {
    return await Trabajos.findById(id);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const findWorkByDentis = async (idDentist: Schema.Types.ObjectId): Promise<TrabajoIT | null> => {
  try {
    return await Trabajos.find({dentista: idDentist});
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const updateWork = async (id: string, data: TrabajoIT): Promise<TrabajoIT | null> => {
  try {
    return await Trabajos.findByIdAndUpdate(id, data, {new: true});
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const deleteWork = async (id: string): Promise<string | null> => {
  try {
    return await Trabajos.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const createWork = async (data: TrabajoIT): Promise<TrabajoIT | null> => {
  try {
    return await new Trabajos(data).save();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const compareWork = async (idWork: string, idUser: Schema.Types.ObjectId): Promise<boolean> => {
  try {
    const work: TrabajoIT = await Trabajos.findById(idWork);
    if (!work) return false;

    const check = work.dentista.toString() === idUser.toString();
    return check ? true : false;
    
  } catch (error) {
    console.log(error);
    return false;
  }
}