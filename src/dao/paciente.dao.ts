import {Paciente, PacienteIT} from '../models/pacient.model';

export const getPatientById = async (id: string): Promise<PacienteIT | null> => {
  try {
    return await Paciente.findById(id);
  } catch (error) {
    console.log('error al traer usuario por id');
    console.log(error);
    return null;
  }
};

export const getPatientByName = async (name: string): Promise<PacienteIT | null> => {
  try {
    return await Paciente.findOne({name});
  } catch (error) {
    console.log('error al traer usuario por nombre');
    console.log(error);
    return null;
  }
};

export const getAllPatient = async (): Promise<PacienteIT[] | null> => {
  try {
    return await Paciente.find();
  } catch (error) {
    console.log('error al obtener usuarios');
    console.log(error);
    return null;
  }
};

export const deletePatient = async (id: string): Promise<PacienteIT | null> => {
  try {
    return await Paciente.findByIdAndDelete(id);
  } catch (error) {
    console.log('error al eliminar usuario');
    console.log(error);
    return null;
  }
};

export const updatePatient = async (id: string, data: object): Promise<PacienteIT | null> => {
  try {
    return await Paciente.findByIdAndDelete(id);
  } catch (error) {
    console.log('error al actualizar usuario');
    console.log(error);
    return null;
  }
};