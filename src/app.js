import express  from "express";
import morgan from "morgan";

//  --Importamos el modulo que creamos dbConn.js ..
import empleadosRoutes from './routes/empleados.routes.js';
import indexRoutes from './routes/index.routes.js';


//  --Inicializamos el modulo en la declaracion de una constante..
const app = express();
// --funcion del modulo Express para interpretar datos JSON: ..
app.use(express.json());
// --middlewares: ..
app.use(morgan('dev'));


//  --Routes : -----------------------------------------------------|
app.use(indexRoutes);
app.use(empleadosRoutes);

// -------------------------XXXXXXXXXXX-------------------------|

export default app;