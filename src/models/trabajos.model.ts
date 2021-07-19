import {Schema, model, Document, ObjectId} from 'mongoose';

export interface TrabajoIT {
  _id?: ObjectId;
  dentista: Schema.Types.ObjectId;
  tratamiento: Schema.Types.ObjectId;
  precio: number;
}

const TrabajosSchema = new Schema({
  dentista: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  tratamiento: {
    type: Schema.Types.ObjectId,
    ref: 'tratamiento',
    required: true,
  },
  precio: {
    type: Number,
    default: 0,
  },
});

export const Trabajos = model('Trabajo', TrabajosSchema);