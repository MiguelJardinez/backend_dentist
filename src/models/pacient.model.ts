import { string } from 'joi';
import {Schema, model, Document} from 'mongoose';

export interface PacienteIT extends Document {
  name: string;
  age: string;
  image: string;
  birthday: Date;
  email: string;
  phone: string;
  password: string;
  trabajos?: Schema.Types.ObjectId[];
  dentista: Schema.Types.ObjectId;
}

const PacienteSchema = new Schema<PacienteIT>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  age: {
    type: string,
    required: true,
    trim: true,
  },
  image: {
    type: string,
    trim: true,
    required: true,
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
    required: true,
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
},{
  timestamps: true,
});

export const Paciente = model('Paciente', PacienteSchema)