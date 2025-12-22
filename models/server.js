const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        //Conectar con la base de datos
        this.connectarDB();

        //Middlewares
        this.middlewares();

        //Función para las rutas
        this.routes();

    }

    async connectarDB(){
        await dbConnection();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //leer lo que el usuario envia por el cuerpo de la peticion
        this.app.use(express.json());

        //Definir la carpeta pública
        this.app.use(express.static('public'));

    }

    routes() {
        /* Acá conectamos los paths con sus archivos */
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server online on port: ${this.port}`);
        })
    }

}

module.exports = Server;
