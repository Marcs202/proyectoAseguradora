import express from 'express';
import cors from 'cors';
import BaseRouter from './src/rutas/BaseRouter.js';
import MarketRouter from './src/rutas/MarketRouter.js';
import ReparacionesRouter from './src/rutas/ReparacionesRouter.js';
import DepartamentoRouter from './src/rutas/DepartamentoRouter.js'
import PiezasRouter from './src/rutas/PiezasRouter.js'
export const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use('/', BaseRouter);
app.use('/api/market',MarketRouter);
app.use('/api/piezas',PiezasRouter);
app.use('/api/reparaciones', ReparacionesRouter);
app.use('/api/departamentos',DepartamentoRouter);


const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
