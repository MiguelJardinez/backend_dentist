import mongoose from 'mongoose';

const conectionDB = async () => {
  try {
    await mongoose.connect(process.env.URL!, {
      dbName: 'dentis_db',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Base de datos conectada');
  } catch (error) {
    console.log('No se logro conectar con la base de datos');
    console.log(error);
  }
};

export default conectionDB;