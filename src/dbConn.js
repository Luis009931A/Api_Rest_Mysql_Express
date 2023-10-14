// Importamos el  modulo de conexion a mysql2: ..
import { createPool } from "mysql2/promise";

import { DB_PORT, DB_HOST, DB_USER, DB_PASS , DB_NAME_DATABASE} from "./config.js";


// Creando el pool de conexiones || Su equivalente al path de jdbc: .. 
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: DB_NAME_DATABASE

});

