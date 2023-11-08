import express from 'express';
import { GetAll,GetClientes,GetMarcas } from './controladores/ReparacionesController.js';
const router = express.Router();

router.get('/', GetAll);
router.get('/clientes', GetClientes);
router.get('/marcas', GetMarcas);

export default router;