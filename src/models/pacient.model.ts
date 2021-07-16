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
  atencion?: Schema.Types.ObjectId[];
  alergias: Schema.Types.ObjectId[];
  dentista: Schema.Types.ObjectId;
}

const PacienteSchema = new Schema<PacienteIT>({
  name: {
    type: String,
    trim: true,
  },
  age: {
    type: string,
    trim: true,
  },
  image: {
    type: string,
    trim: true,
  },
  birthday: {
    type: Date,
    trim: true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  atencion: {
    type: String,
  },
  alergias: {
    type: String,
  },
  dentista: {
    type: String,
  },
},{
  timestamps: true,
});

export const Paciente = model('Paciente', PacienteSchema)