import {Request, Response} from 'express';
import {Paciente, PacienteIT} from '../../models/pacient.model';
import {signToken} from '../../utils/token';
import {
  getPatientById,
  getPatientByEmail,
} from '../../dao/paciente.dao';
import { handleError } from '../../dao/dentist.dao';
import { comparePassword } from '../../utils/password';

interface authLogin {
  email: string;
  password: string;
}

export const logearPatient = async (req: Request, res: Response) => {
  const dataUser = req.body as authLogin;
  try {
    const usuario = await getPatientByEmail(dataUser.email);
    if (!usuario) {
      handleError(res, 'Usuario o contraseña incorrectos');
      return;
    }
    const checkPassword = comparePassword(dataUser.password, usuario.password!)
    if (!checkPassword) {
      handleError(res, 'Usuario o contraseña incorrectos');
      return;
    }
    const token = await signToken(usuario.id);
    res.json({
      mensaje: 'paciente logeado exitosamente',
      token
    }); 
  } catch (error) {
    console.log(error);
  }
}

