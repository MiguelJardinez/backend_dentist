import {Response, Request} from 'express';
import {signToken} from '../../utils/token';
import {UserIT} from '../../models/user.model';
import {comparePassword} from '../../utils/password';
import {createUser, getUserByEmail, handleError, checkCodes, updateUser} from '../../dao/user.dao';
import {sendMail} from '../../config/nodemailer';

interface authIT {
  email: string;
  password: string;
};

export const loguearUsuario = async (req: Request, res: Response) => {
  const authData = req.body as authIT;
  try {
    const usuario = await getUserByEmail(authData.email);
    if (!usuario) {
      res.json({
        mensaje: 'Usuario o contraseña incorrecta'
      });
      return;
    };

    const isCorretPassword = comparePassword(authData.password, usuario?.password);
    if (!isCorretPassword) {
      res.json({
        mensaje: 'Usuario o contraseña incorrecta'
      });
      return;
    };

    const token = signToken(usuario?.id);
    res.json({
      mensaje: 'Usuario logueado exitosamente',
      token,
    });
  } catch (error) {
    
  }
} 

export const registrarUsuario = async (req: Request, res: Response) => {
  const usuario = req.body as UserIT;
  const host = req.hostname;
  try {
    const data = await createUser(usuario);
    const url = `https://${host}${process.env.API_VERSION}/confirmar/${data!.resetToken}`
    sendMail(usuario.email, usuario.nombre, url);

    res.json({
      mensaje: `Se ha enviado un correo a para confirmar tu cuenta`
    });
  } catch (error) {
    console.log('No se pudo crear el usuario');
    res.status(401).json({mensaje: 'Hubo un problema'});
  }
}

export const activarCuenta = async (req: Request, res: Response) =>  {
  const code = req.params.code as string
  const email = req.body.email as string;
  
  try {
    const usuario = await getUserByEmail(email);

    //Revisar que el usuario existe
    if (!usuario) {
      handleError(res, 'El usuario no existe');
      return;
    }

    //Revisar que el codigo es correcto
    const checkCode = checkCodes(code, usuario.resetToken!);
    if (!checkCode) {
      handleError(res, 'El codigo no es el mismo');
    }

    //Actualizar usuario
    await updateUser(usuario.id!, {"verified": true, 'resetToken': ''});
    
    res.json({
      mensaje: 'La cuenta ha sido activada correctamente',
    });
  } catch (error) {
    console.log(error);
  }
}