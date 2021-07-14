import User, {UserIT} from '../models/user.model';

export const createUser = async (userData: UserIT): Promise<UserIT | undefined | string> => {
  try {
    const user: UserIT | null = await new User(userData).save();
    return `Se ha creado el usuario ${user.nombre}`;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export const getOneUser = async (id: string): Promise<UserIT | undefined> => {
  try {
    const user: UserIT | null = await User.findById(id);
    return user!;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getAllUsers = async (): Promise<UserIT[] | undefined> => {
  try {
    const users: UserIT[] | null = await User.find();
    return users!;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const deleteUser = async (id: string): Promise<string | undefined> => {
  try {
    const user: UserIT | null = await User.findOneAndDelete({id: id})
    return `Se elimino al usuario ${user?.nombre}`
  } catch (error) {
    console.log(error);
    return undefined;
  }
}