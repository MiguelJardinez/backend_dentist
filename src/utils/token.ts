import jwt from 'jsonwebtoken';

export const signToken = (id: string) => {
  const token = jwt.sign({id}, process.env.SECRET_TOKEN!, {expiresIn: "7d"});
  return token;
};

export const verifyToken = (token: string) => {
  const verify = jwt.verify(token, process.env.SECRET_TOKEN!);
  console.log(verify);
  return verify;
};