import express from 'express';
import cors from 'cors';
import BaseRouter from './src/rutas/BaseRouter.js';

export const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use('/', BaseRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
