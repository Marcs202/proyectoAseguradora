import express from 'express';
import cors from 'cors';
import BaseRouter from './src/rutas/BaseRouter.js';
import MarketRouter from './src/rutas/MarketRouter.js';
import ReparacionesRouter from './src/rutas/ReparacionesRouter.js';

export const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

//routes
app.use('/', BaseRouter);
app.use('/api/market',MarketRouter);
app.use('/api/reparaciones', ReparacionesRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
