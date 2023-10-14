// Importamos el modulo Routes que contiene Express: ..
import { Router } from "express";
import { consultarEmpleados, eliminarEmpleado, actualizarEmpleado, crearEmpleado, consultarEmpleado } from '../controller/empleados.controller.js';

const router = Router();


// Routes : -----------------------------------------------------|


router.get('/api/empleados', consultarEmpleados); // Consulta todos registros de la tabla empleados.

router.get('/api/empleados/:id', consultarEmpleado) // Consulta un solo registro de la tabla.

router.post('/api/empleados', crearEmpleado); // crea un registro a la tabla empleado.

router.put('/api/empleados/:id', actualizarEmpleado); // Actualiza campos de la tabla empleados.

router.delete('/api/empleados/:id', eliminarEmpleado); // Elimina un registro de la tabla empleados.


// -------------------------XXXXXXXXXXX-------------------------|
















export default router;