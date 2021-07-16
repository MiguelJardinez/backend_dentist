import {Schema, model, Document} from 'mongoose';

export interface TratamientoIT extends Document {
  name: string;
  especialidad: string;
  codigo: string;
}

const TratamientoSchema = new Schema<TratamientoIT>({
  name: {
    type: String,
    trim: true,
    unique: true,
  },
  especialidad: {
    type: String,
    trim: true,
    unique: true,
  },
  codigo: {
    type: String,
    trim: true,
    unique: true,
  },
},{
  timestamps: true,
});

export const Tratamiento = model<TratamientoIT>('tratamiento', TratamientoSchema);