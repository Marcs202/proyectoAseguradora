import express from 'express';
import cors from 'cors';
import BaseRouter from './src/rutas/BaseRouter.js';
import MarketRouter from './src/rutas/MarketRouter.js';
export const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use('/', BaseRouter);
app.use('/market',MarketRouter);
const port = 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
