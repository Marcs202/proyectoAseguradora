import sql from 'mssql';
import { sqlConfig } from '../../../config/config.js';

export  const Bienvenido2 = async (req, res, next) => {
    let response = {};
    try {
        response.message = "Endpoint funcional";
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from proveedores`
        console.dir(result)
        res.status(200).json(response);
    } catch (error) {
        console.log("Se produjo una excepcion al procesar la peticion:", error);
        response.message = "Ocurrió un error al procesar la petición";
        res.status(400).json(response);
    }
};
