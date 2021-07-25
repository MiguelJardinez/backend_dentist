import {Schema, model, Document, ObjectId} from 'mongoose';

export interface TrabajoIT {
  _id?: ObjectId;
  tratamiento: Schema.Types.ObjectId;
  dentista: Schema.Types.ObjectId;
  precio: number;
}

const TrabajosSchema = new Schema({
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