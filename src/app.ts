import express from 'express';
import dotenv from 'dotenv';
import conectionDB from './db/db';
import cors from 'cors';

//Rutas de la aplicación
import userRoute from './routes/users.route';
import authRouter from './routes/auth.route';
import pacienteRouter from './routes/paciente.route';

const app = express();

//Configuraciones del servidor y DB
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
dotenv.config();
conectionDB();

//Utilizar rutas
app.use(`${process.env.API_VERSION}/auth`, authRouter);
app.use(`${process.env.API_VERSION}/usuarios`, userRoute);
app.use(`${process.env.API_VERSION}/pacientes`, pacienteRouter)

//Inicializando el servidor
app.listen(process.env.PORT, () => {
  console.log('Servidor funcionando en puerto', process.env.PORT);
});

