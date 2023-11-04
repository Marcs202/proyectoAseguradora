import express from 'express';
import cors from 'cors';
import BaseRouter from './src/rutas/BaseRouter.js';
import ReparacionesRouter from './src/rutas/ReparacionesRouter.js';

export const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use('/', BaseRouter);
app.use('/api/reparaciones', ReparacionesRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
