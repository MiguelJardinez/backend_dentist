import express from 'express';
import dotenv from 'dotenv';
import conectionDB from './db/db';
import cors from 'cors';

const app = express();

//Configuraciones del servidor y DB
app.use(cors());
app.use(express.json());
dotenv.config();
conectionDB();

//Utilizar rutas

//Inicializando el servidor
app.listen(process.env.PORT, () => {
  console.log('Servidor funcionando en puerto', process.env.PORT);
});