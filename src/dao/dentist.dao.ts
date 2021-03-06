import {UserIT, Dentista} from '../models/dentist.model';
import {Response} from 'express';
import {ObjectId, Schema} from 'mongoose';
import {Trabajos} from '../models/trabajos.model';

export const createUser = async (userData: UserIT): Promise<UserIT | undefined> => {
  try {
    return await new Dentista(userData).save();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export const getUserById = async (id: Schema.Types.ObjectId): Promise<UserIT | null> => {
  try {
    return await Dentista.findById(id);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserByEmail = async (email: string): Promise<UserIT | null> => {
  try {
    return await Dentista.findOne({email});
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllUsers = async (): Promise<UserIT[] | null> => {
  try {
    return await Dentista.find();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteUser = async (id: string): Promise<UserIT | null> => {
  try {
    return await Dentista.findOneAndDelete({id: id});
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const updateUser = async (id: string, data: object) => {
  try {
    return await Dentista.findByIdAndUpdate(id, data, {new: true});
  } catch (error) {
    console.log(error);
  }
}

export const handleError = (res: Response, mensaje: string) => {
  res.json({
    mensaje: mensaje,
  });
}

export const checkCodes = (codeParams: String, codeUser: string): boolean => {
  try {
    const validCode = codeParams.toString() === codeUser.toString() ? true  : false
    return validCode;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const addWorkProfile = async (workId: ObjectId, userId: ObjectId): Promise<boolean> => {
  try {
    const dentista = await Dentista.findById(userId);
    if (!dentista) return false;

    const trabajos = dentista?.trabajos;
    await Dentista.findByIdAndUpdate(dentista?._id, {trabajos: [...trabajos!, workId]}, {new: true});
    return true;
    
  } catch (error) {
    console.log(error);
    return false;
  }
}