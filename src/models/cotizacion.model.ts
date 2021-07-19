import {ObjectId, model, Schema, Document} from 'mongoose';

export interface CotizacionIT extends Document {
  _id?: ObjectId;
  dentista: ObjectId;
  fecha: Date;
  paciente: ObjectId;
  destripcion: String;
  accepted: boolean;
  trabajos: ObjectId[];
  costo: number;
}

const CotizacionSchema = new Schema({
  dentista: {
    type: Schema.Types.ObjectId,
    ref: 'Dentista',
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now()
  },
  paciente: {
    type: Schema.Types.ObjectId,
    ref: 'Paciente',
    required: true
  },
  destripcion: {
    type: String,
    trim: true,
    required: true
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  trabajos: {
    type: [Schema.Types.ObjectId],
    ref: 'Trabajo',
    required: true
  },
  costo: {
    type: Number,
    required: true
  },
});

export const Cotizacion = model('Cotizacion', CotizacionSchema);