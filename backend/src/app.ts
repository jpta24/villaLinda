import express from 'express';
import morgan from 'morgan'; // registro de peticiones en el servidor
import cors from 'cors'; // permite conexion con otros servidores

import config from './config';

import habRoutes from './routes/Habitaciones/Habitaciones.routes';
import extraRoutes from './routes/ExtraMerc/Extra.routes';
import gralLog from './routes/GralLog/GralLog.routes';

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // para entender los campos que vienen en la url

app.use(habRoutes);
app.use(extraRoutes);
app.use(gralLog);

export default app;
