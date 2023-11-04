import express from 'express';
import { GetAll } from './controladores/MarketController.js';
const router = express.Router();

router.get('/',GetAll );

export default router;



