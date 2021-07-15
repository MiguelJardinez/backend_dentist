import Roles from '../models/roles.model';

enum RoleEnum {
  DENTISTA='DENTISTA',
  PACIENTE='PACIENTE',
}

export default async () => {
  try {
    const rol: number = await Roles.countDocuments();
    if (rol > 0) return;
    console.log('Creando todos los roles');
    await new Roles({roles: RoleEnum.DENTISTA}).save();
    await new Roles({roles: RoleEnum.PACIENTE}).save();

  } catch (error) {
    console.log('Tuvimos un error', error);
  }
}

