// Importa el modulo creado de la conn db: ..
import { pool } from "../dbConn.js";

// Funciones: ..
export const ping = async(req, res) => {
    
    res.json(`"PONG",  Si tienes conexion a internet`);
}