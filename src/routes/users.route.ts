import {Router} from 'express';
import {
  obtenerPerfil,
  actualizarPerfil,
  actualizarTrabajo,
  agregarTrabajo,
  eliminarTrabajo,
  obtenerTrabajos,
} from '../controllers/usuarios/user.controller';
import { verifyKey } from '../middleware/verifyKey';
import { verifyTokenMid } from '../middleware/verifyToken';

const router = Router();

router.get('/perfil', verifyKey, verifyTokenMid, obtenerPerfil);
router.get('/obtener-trabajos', verifyKey, verifyTokenMid, obtenerTrabajos);

router.post('/agregar-trabajo', verifyKey, verifyTokenMid, agregarTrabajo);
router.put('/actualizar-trabajo', verifyKey, verifyTokenMid, actualizarTrabajo);
router.put('/actualizar-perfil', verifyKey, verifyTokenMid, actualizarPerfil);
router.delete('/eliminar-trabajo/:id', verifyKey, verifyTokenMid, eliminarTrabajo);

export default router;