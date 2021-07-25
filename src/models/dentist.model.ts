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
  startWork: string;
  finishWork: string;
  daysLabor: String[];
  trabajos?: Schema.Types.ObjectId[];
};

const DenstistSchema = new Schema<UserIT>({
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
    ref: 'Roles',
    default: '60f611895efb710d6e69d2b9',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  trabajos: {
    type: [Schema.Types.ObjectId],
    ref: 'Trabajos',
    default: []
  },
  finishWork: {
    type: String,
    required: true,
    trim: true
  },
  startWork: {
    type: String,
    required: true,
    trim: true
  },
  daysLabor: {
    type: [String],
    default: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
  },
},
{
  timestamps: true,
});

//Función para hashear password
DenstistSchema.pre('save', function (next){
  const user = this;
  user.resetToken = crypto.randomBytes(30).toString('hex');
  user.password = bcrypt.hashSync(user.password, 10);
  next();
});

export const Dentista = model<UserIT>('Dentista', DenstistSchema);
