import {UserTokenIT} from '../../src/utils/token';

declare global {
  namespace Express {
    interface Request {
      usuario?: UserTokenIT
    }
  }
}
