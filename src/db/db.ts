import mongoose from 'mongoose';
import crearRoles from '../utils/crearRoles';

const conectionDB = async () => {
  try {
    await mongoose.connect(process.env.URL!, {
      dbName: 'dentis_db',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Base de datos conectada');

    //Creando los roles de para la aplicación
    crearRoles();
  } catch (error) {
    console.log('No se logro conectar con la base de datos');
    console.log(error);
  }
};

export default conectionDB;