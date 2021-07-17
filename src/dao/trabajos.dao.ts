import { Schema } from 'mongoose';
import {Trabajos, TrabajoIT} from '../models/trabajos.model';

export const findAllWorks = async (): Promise<TrabajoIT | null> => {
  try {
    return await Trabajos.find();
  } catch (error) {
    console.log(error);
    return null;
  }
}

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

export const updateWork = async (id: Schema.Types.ObjectId, data: TrabajoIT): Promise<TrabajoIT | null> => {
  try {
    return await Trabajos.findOneAndUpdate(id, data, {new: true});
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const deleteWork = async (id: Schema.Types.ObjectId): Promise<string | null> => {
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