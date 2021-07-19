import { func, string } from 'joi';
import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcrypt';

export interface PacienteIT extends Document {
  name: string;
  age: string;
  image?: string;
  birthday: Date;
  email: string;
  phone: string;
  password?: string;
  trabajos?: Schema.Types.ObjectId[];
  dentista: Schema.Types.ObjectId;
  firstTime: boolean;
}

const PacienteSchema = new Schema<PacienteIT>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  birthday: {
    type: Date,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: 6
  },
  trabajos: {
    type: Schema.Types.ObjectId,
    ref: 'Trabajo'
  },
  dentista: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  firstTime: {
    type: Boolean,
    default: true,
  }
},{
  timestamps: true,
});

PacienteSchema.pre('save', function(next) {
  const patient: PacienteIT = this;
  patient.password = bcrypt.hashSync(patient.password!, 10);
  next()
});

export const Paciente = model('Paciente', PacienteSchema)