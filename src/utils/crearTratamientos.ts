import {Tratamiento} from '../models/tratamientos.model';

export default async () => {
  try {
    const tratamiento: number = await Tratamiento.countDocuments();
    if (tratamiento > 0) return;
    console.log('Creando tratamientos');
    await Tratamiento.insertMany([
      {
        name: 'Blanqueamiento dental',
        especialidad: 'Dentista',
        codigo: 'BD',
      },
      {
        name: 'Carillas dentales',
        especialidad: 'Dentista',
        codigo: 'CD',
      },
      {
        name: 'Implantes dentales',
        especialidad: 'Dentista',
        codigo: 'ID',
      },
      {
        name: 'Ortodoncia',
        especialidad: 'Dentista',
        codigo: 'OD',
      },
      {
        name: 'Periodoncia',
        especialidad: 'Dentista',
        codigo: 'PD',
      },
      {
        name: 'Periodoncia',
        especialidad: 'Dentista',
        codigo: 'PD',
      },
      {
        name: 'Endodoncia',
        especialidad: 'Dentista',
        codigo: 'ED',
      },
      {
        name: 'Cirugía oral',
        especialidad: 'Dentista',
        codigo: 'CO',
      },
    ]);

  } catch (error) {
    console.log('Errores al crear tratamiento')
    console.log(error);
  }
}