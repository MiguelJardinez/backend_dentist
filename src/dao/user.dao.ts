import User, {UserIT} from '../models/user.model';

export const createUser = async (userData: UserIT): Promise<UserIT | undefined | string> => {
  try {
    return await new User(userData).save();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export const getOneUser = async (id: string): Promise<UserIT | null> => {
  try {
    return await User.findById(id);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllUsers = async (): Promise<UserIT[] | null> => {
  try {
    return await User.find();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteUser = async (id: string): Promise<UserIT | null> => {
  try {
    return await User.findOneAndDelete({id: id});
  } catch (error) {
    console.log(error);
    return null;
  }
}