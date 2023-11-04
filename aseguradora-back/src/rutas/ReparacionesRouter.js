import express from 'express';
import { GetAll } from './controladores/ReparacionesController.js';
const router = express.Router();

router.get('/', GetAll);

export default router;