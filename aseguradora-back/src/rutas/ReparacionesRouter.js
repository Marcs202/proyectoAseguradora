import express from 'express';
import { GetAll,GetClientes,GetMarcas,CrearReparacion,GetPorEstado} from './controladores/ReparacionesController.js';
const router = express.Router();

router.get('/', GetAll);
router.post('/estado',GetPorEstado);
router.get('/clientes', GetClientes);
router.get('/marcas', GetMarcas);
router.post('/registrar', CrearReparacion);

export default router;