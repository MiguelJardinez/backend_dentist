import {Router} from 'express';
import {
  crearPaciente,
  eliminarPaciente,
  modificarPaciente,
  obtenerPacientes,
  obtenerPacienteById
} from '../controllers/clientes/cliente.controller';
import {verifyKey} from '../middleware/verifyKey';
import {verifyTokenMid} from '../middleware/verifyToken';

const router = Router();

router.get('/obtener', verifyKey, verifyTokenMid, obtenerPacientes);
router.get('/obtener-paciente/:id', verifyKey, verifyTokenMid, obtenerPacienteById);

router.post('/crear', verifyKey, verifyTokenMid, crearPaciente);
router.put('/modificar/:id', verifyKey, verifyTokenMid, modificarPaciente);
router.delete('/eliminar/:id', verifyKey, verifyTokenMid, eliminarPaciente);

export default router;