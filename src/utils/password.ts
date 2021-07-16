import bcrypt from 'bcrypt';

export const comparePassword = (password: string, passwordUser: string) => {
  const checkPassword = bcrypt.compareSync(password, passwordUser);
  return checkPassword;
};
