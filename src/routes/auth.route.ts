import {Router} from 'express';
import {loguearUsuario, registrarUsuario, activarCuenta} from '../controllers/auth/auth.controller';
import { verifyKey } from '../middleware/verifyKey';
const router = Router();


router.post('/logear', verifyKey, loguearUsuario);
router.post('/registrar', verifyKey, registrarUsuario);
router.post('/activar-cuenta/:code', verifyKey, activarCuenta);

export default router;