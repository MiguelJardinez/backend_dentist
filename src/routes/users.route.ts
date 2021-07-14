import {Router} from 'express';
import {Request, Response} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({mensaje: 'Buscando usarios'});
});

router.post('/crear', );

export default router;