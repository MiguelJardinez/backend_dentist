import {UserTokenIT} from '../../utils/token';

declare global {
  namespace Express {
    interface Request {
      usuario?: UserTokenIT
    }
  }
}
