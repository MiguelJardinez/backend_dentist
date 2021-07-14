import express from 'express';
import dotenv from 'dotenv';
import conectionDB from './db/db';
import cors from 'cors';

//Rutas de la aplicación
import userRoute from './routes/users.route';

const app = express();

//Configuraciones del servidor y DB
app.use(cors());
app.use(express.json());
dotenv.config();
conectionDB();
const apiVersion = process.env.API_VERSION;

//Utilizar rutas
app.use(`${process.env.API_VERSION}/usuarios`, userRoute);

//Inicializando el servidor
app.listen(process.env.PORT, () => {
  console.log('Servidor funcionando en puerto', process.env.PORT);
});
