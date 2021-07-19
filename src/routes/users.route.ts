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

router.post('/agregar-trabajo/', verifyKey, verifyTokenMid, agregarTrabajo);
router.put('/actualizar-trabajo/:id', verifyKey, verifyTokenMid, actualizarTrabajo);
router.delete('/eliminar-trabajo/:id', verifyKey, verifyTokenMid, eliminarTrabajo);

router.put('/actualizar-perfil', verifyKey, verifyTokenMid, actualizarPerfil);

export default router;