import express from 'express';
import { GetCategorias, GetMarcas, GetProveedores, 
    GetTiendas, PostPieza, PutInactivarPieza, PutPieza } from './controladores/PiezasController.js';

const router = express.Router();
router.post('/',PostPieza);
router.get('/Proveedores',GetProveedores);
router.get('/Categorias',GetCategorias);
router.get('/Marcas',GetMarcas);
router.get('/Tiendas',GetTiendas);
router.put('/Editar',PutPieza);
router.put('/Delete',PutInactivarPieza);
export default router;
