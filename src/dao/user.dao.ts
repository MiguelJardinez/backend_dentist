import {UserIT, Usuario} from '../models/user.model';
import {Response} from 'express';

export const createUser = async (userData: UserIT): Promise<UserIT | undefined> => {
  try {
    return await new Usuario(userData).save();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export const getUserById = async (id: string): Promise<UserIT | null> => {
  try {
    return await Usuario.findById(id);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserByEmail = async (email: string): Promise<UserIT | null> => {
  try {
    return await Usuario.findOne({email});
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllUsers = async (): Promise<UserIT[] | null> => {
  try {
    return await Usuario.find();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteUser = async (id: string): Promise<UserIT | null> => {
  try {
    return await Usuario.findOneAndDelete({id: id});
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const updateUser = async (id: string, data: object) => {
  try {
    return await Usuario.findByIdAndUpdate(id, data, {new: true});
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