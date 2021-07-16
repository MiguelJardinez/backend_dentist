import {Schema, model, Document} from 'mongoose';

export interface TrabajoIT extends Document {
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
  precios: {
    type: Number,
    default: 0,
  },
});

export const Trabajos = model('Trabajo', TrabajosSchema);