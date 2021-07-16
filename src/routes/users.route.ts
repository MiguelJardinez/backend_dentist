import {Router} from 'express';
import {Request, Response} from 'express';
import {
  eliminarUsuario,
} from '../controllers/usuarios/user.controller';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({mensaje: 'Buscando usarios'});
});

router.post('/eliminar', eliminarUsuario);

export default router;