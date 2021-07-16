import mongoose from 'mongoose';
import crearRoles from '../utils/crearRoles';
import crearTratamientos from '../utils/crearTratamientos';

const conectionDB = async () => {
  try {
    await mongoose.connect(process.env.URL!, {
      dbName: 'dentis_db',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Base de datos conectada');

    //Creando los roles y tratamientos de para la aplicación
    crearRoles();
    crearTratamientos();
  } catch (error) {
    console.log('No se logro conectar con la base de datos');
    console.log(error);
  }
};

export default conectionDB;