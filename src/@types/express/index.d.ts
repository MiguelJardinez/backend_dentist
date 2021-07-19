import { UserIT } from '../../models/dentist.model';
import {UserTokenIT} from '../../utils/token';

declare global {
  namespace Express {
    interface Request {
      usuario?: UserTokenIT
      paciente?: UserTokenIT
    }
  }
}
