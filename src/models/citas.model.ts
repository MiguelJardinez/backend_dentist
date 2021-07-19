import {model, Document, Schema, ObjectId} from 'mongoose';

export interface CitasIT extends Document {
  _id?: ObjectId;
  paciente: ObjectId;
  dentista: ObjectId;
  trabajos: ObjectId[],
  fecha: Date;
  costo: number;
}

const CitasSchema = new Schema<CitasIT>({
  paciente: {
    type: Schema.Types.ObjectId,
    ref: 'Paciente',
    required: true,
    trim: true,
  },
  dentista: {
    type: Schema.Types.ObjectId,
    ref: 'Dentista',
    required: true,
    trim: true,
  },
  trabajos: {
    type: Schema.Types.ObjectId,
    ref: 'Trabajo',
    required: true,
    trim: true,
  },
  fecha: {
    type: Date,
    required: true,
    trim: true,
  },
  costo: {
    type: Number,
    required: true,
  },
});

export const Cita = model<CitasIT>('Cita', CitasSchema);