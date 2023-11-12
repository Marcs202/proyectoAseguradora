import express from 'express';
import { GetAll,GetClientes,GetMarcas,CrearReparacion,GetPorEstado,CambiarEstado} from './controladores/ReparacionesController.js';
const router = express.Router();

router.get('/', GetAll);
router.post('/estado',GetPorEstado);
router.get('/clientes', GetClientes);
router.get('/marcas', GetMarcas);
router.post('/registrar', CrearReparacion);
router.post('/estado/cambiar', CambiarEstado);

export default router;