import {model, Schema, Document} from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserIT extends Document {
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
  rol: {
    type: Schema.Types.ObjectId,
    ref: 'Roles',
  }
},
{
  timestamps: true,
});

//Función para hashear password
UserModel.pre('save', function (next){
  const user = this;
  console.log(user.password);
  user.password = bcrypt.hashSync(user.password, 10);
  console.log('Password hasheada', user.password);
  next();
});

export default model<UserIT>('Usuario', UserModel);
