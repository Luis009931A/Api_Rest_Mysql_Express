
// Importamos los modulos de Routes-Express & el modulo creado: "index.controller.js": ..
import { Router } from 'express';
import { ping } from '../controller/index.controller.js';


// Instancia del modulo importado: ..
const router = Router();


router.get('/ping', ping);







export default router;