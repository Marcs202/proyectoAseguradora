import express from 'express';
import { GetAll,GetClientes,GetMarcas,CrearReparacion } from './controladores/ReparacionesController.js';
const router = express.Router();

router.get('/', GetAll);
router.get('/clientes', GetClientes);
router.get('/marcas', GetMarcas);
router.post('/registrar', CrearReparacion);

export default router;