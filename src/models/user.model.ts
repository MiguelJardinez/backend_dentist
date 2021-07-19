import {model, Schema, Document} from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export interface UserIT extends Document {
  nombre: string;
  email: string;
  password: string;
  photo?: string;
  resetToken?: string;
  restartDate?: string;
  trabajos?: Schema.Types.ObjectId[];
};

const UserSchema = new Schema<UserIT>({
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
    required: true,
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
    required: true,
    ref: 'Roles',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  trabajos: {
    type: [Schema.Types.ObjectId],
    ref: 'Trabajos',
    default: []
  }
},
{
  timestamps: true,
});

//Función para hashear password
UserSchema.pre('save', function (next){
  const user = this;
  user.resetToken = crypto.randomBytes(30).toString('hex');
  user.password = bcrypt.hashSync(user.password, 10);
  next();
});

export const Usuario = model<UserIT>('Usuario', UserSchema);
