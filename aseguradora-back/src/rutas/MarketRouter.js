import express from 'express';

import { Bienvenido2 } from './controladores/MarketController.js';
const router = express.Router();

router.get('/', Bienvenido2);

export default router;



