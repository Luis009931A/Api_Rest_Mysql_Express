//  --Importamos nuestro modulo en donde se encuentra nuestra app y sus rutas: ..

import  app  from "./app.js";

//  --Modulo con la configuracion de la variables de entorno ..

import { PORT } from "./config.js";



//  --Establecemos el puerto donde estara escuchando la App.. 

app.listen(PORT);
console.log('Server running on port: '+PORT);

//  --Exportamos los modulos.. (Express) 
