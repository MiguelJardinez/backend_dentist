import {model, Schema} from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserIT {
  nombre: string;
  email: string;
  password: string;
  photo?: string;
  resetToken?: string;
  restartDate?: Date;
};

const UserModel = new Schema<UserIT>({
  nombre: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: 6
  },
  photo: {
    type: String,
    trim: true,
  },
  resetToken: {
    type: String,
    trim: true,
  },
  restartDate: {
    type: String,
    trim: true,
  },
},
{
  timestamps: true,
})

//Función para hashear password
UserModel.pre('save', (next) => {
  const user: UserIT = this!;
  console.log(user);
  user.password = bcrypt.hashSync(user.password, 10);
  console.log(user);
  next();
});

export default model<UserIT>('User', UserModel);