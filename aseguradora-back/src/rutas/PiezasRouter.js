import express from 'express';
import { PostPieza } from './controladores/PiezasController.js';

const router = express.Router();
router.post('/',PostPieza);


export default router;
