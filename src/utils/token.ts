import jwt, { JwtPayload } from 'jsonwebtoken';


export interface UserTokenIT extends JwtPayload {
  id: string;
}

export const signToken = (id: string) => {
  const token = jwt.sign({id}, process.env.SECRET_TOKEN!, {expiresIn: "7d"});
  return token;
};

export const verifyToken = (token: string): UserTokenIT | null => {
  const verify  = jwt.verify(token, process.env.SECRET_TOKEN!) as UserTokenIT;
  if (!verify) {
    return null;
  }
  return verify;
};