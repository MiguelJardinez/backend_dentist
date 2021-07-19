import {Router} from 'express';
import {verifyKey} from "../middleware/verifyKey";
import {logearPatient} from "../controllers/clientes/authPatient.controller";

const router = Router();

router.post('/logear', verifyKey, logearPatient);

export default router;