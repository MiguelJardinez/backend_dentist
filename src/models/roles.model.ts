import {model, Schema} from 'mongoose';

enum RoleEnum {
  DENTISTA='DENTISTA',
  PACIENTE='PACIENTE',
}

export interface rolIT {
  rol: RoleEnum;
}

const RolesSchema = new Schema<rolIT>({
  roles: {
    type: String,
    trim: true,
    required: true,
    enum: ['DENTISTA', 'PACIENTE'],
    default: 'PACIENTE'
  },
});

export default model<rolIT>('Roles', RolesSchema);