import {Request, Response} from 'express';
import {PacienteIT} from '../../models/pacient.model';
import generator from 'generate-password';
import {
  createPatient,
  deletePatient,
  getPatientById,
  updatePatient,
  getAllPatient
} from '../../dao/paciente.dao';
import {sendMailPatient} from '../../config/nodemailer';
import {generatePassword} from '../../utils/generarPassword';

export const modificarPaciente = (req: Request, res: Response) => {

} 

export const eliminarPaciente = (req: Request, res: Response) => {

} 

export const obtenerPacientes = (req: Request, res: Response) => {

}

export const obtenerPacienteById = (req: Request, res: Response) => {

}

export const crearPaciente = async (req: Request, res: Response) => {
  const data = req.body as PacienteIT;
  const dentistId = req.usuario?.id!;

  try {
    const password = await generatePassword();
    if (!password) return;
    data.password = password;
    data.dentista = dentistId;
    
    const patient = await createPatient(data);
    if (!patient) return;
    
    sendMailPatient(patient.email, patient.name, password)

    res.json({
      mensaje: `Se ha creado el usuario ${patient.name}`,
    });
  } catch (error) {
    console.log(error);
    res.json({
      mensaje: 'No se pudo crear el usuario'
    })
  }
} 