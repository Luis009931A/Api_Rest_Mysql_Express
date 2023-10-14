// Mi_modulo_de_conexion_a_la_base_de_datos
import { pool } from "../dbConn.js";

// Metodos para el CRUD: .. -----------------------------------X
// Leer .
export const consultarEmpleados = async (req, res) => {
    try {

        const [rows] = await pool.query('SELECT * FROM empleado');
        
        if (rows.length === 0) {

            res.status(404).json({ message: 'No se encontraron empleados' });
        }
        
        res.status(200).json(rows);

      } catch (error) {

        console.error('Error al consultar empleados:', error);
        res.status(500).json({ error: 'Hubo un problema al procesar la solicitud' });
      }

}

// Un solo empleado
export const consultarEmpleado =  async (req, res) => {
    
    try {

        const { id } = req.params;
        const query = 'SELECT * FROM empleado WHERE id = ?';
        const [rows] = await pool.query(query, [id]);

        if (rows.length === 0) {
            
            console.log('No se encontaron registros');
            res.status(404).json({ error: 'No se encontraron registros para el ID proporcionado' });

        }

    res.status(200).json(rows[0]);

    } catch (error) {

        console.error('¡Upppss!!l, error en el Servidor', error);
        res.status(500).json({ error: 'Error interno del servidor', details: error.message });
        
    }

}

// Insertar || Crear .
export const crearEmpleado = async (req, res) => {
    
    try {

    const {nombre, sueldo} =req.body;

    if (!nombre || !sueldo) {

        return res.status(400).json({ error: 'Nombre y sueldo son campos requeridos.' });
      }
    
    

        const [rows] = await pool.query('INSERT INTO empleado (nombre, sueldo) VALUES (?, ?)', [nombre, sueldo]);
        const empleado = {
            id: rows.insertId,
            nombre,
            sueldo,
        };

        res.status(201).json({ message: 'Datos ingresados con éxito', empleado});

    } catch (error) {
        
        console.error('Error al insertar en la base de datos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


// Actulizar .
export const actualizarEmpleado =  async (req, res) => {
    
    try {

        const {id} =req.params;
        const {nombre, sueldo} = req.body;

        const queryValidateId = 'SELECT id FROM empleado WHERE id = ?';
        const [resultValidateId] = await pool.query(queryValidateId, [id]);
        
        if (resultValidateId.length === 0) {
            
            console.log("Id no se enceuntra registrado");
            res.status(404).json({message: "Error el empleado que estas intentando actualizar no se enceuntra registrado"});

        } else if (!nombre || !sueldo) {
            
            console.log("Campos vacios");
            res.status(400).json({message: "Error los campos nombre y sueldo son requeridos"});

        } else {

            const query = 'UPDATE  empleado SET nombre = ?, sueldo = ? WHERE id = ?';
            await pool.query(query, [nombre, sueldo, id]);

            const queryEmpleadoUpdate = 'SELECT * FROM empleado WHERE id = ?';
            await pool.query(queryEmpleadoUpdate, [id]);

            console.log("Actualizacion exitosa");
            res.status(202).json({message: "Actualizacion de campos exitosa" });
        }

    } catch (error) {

        console.error("Ha ocurrido un error interno en el servidor intentelo nuevamente despues");
        res.status(500).json({message: "Ha ocurrido un error interno en el servidor"});
    }
}

// Eliminar .
export const eliminarEmpleado = async(req, res) => {

    try {
        
        const { id } = req.params;
        const queryValidate = 'SELECT id FROM empleado WHERE id = ?';
        const  [validateResult]  = await pool.query(queryValidate, [id]);
        

        if (validateResult.length === 0){

            console.log("Error el registro que deseas eliminar no existe");
            res.status(404).json({error: " AH ocurrido un error el registro que deseas eliminar no existe"});

        }else{

            const queryDelete = 'DELETE FROM empleado WHERE id = ?';
            await pool.query(queryDelete, [id]);
            res.status(200).json({message: "Se elimino con exito un registro"});

        }

    } catch (error){
        console.error("Ha ocurrido un error interno en el servidor intentelo nuevamente");
        res.status(500).json({message: "Ocurrio un error interno del servidor"});
    }

}

