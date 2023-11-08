import { getConnection, sql } from "../../database/conexion.js";
import { queriesPieza } from "../../database/consultas/Pieza.js";
import { UploadFileToBucket } from "../../utils/CloudStorage.js";
export const PostPieza = async (req, res, next) => {
    let response = {};
    try {
        const file = req.body.file;
        const buffer = Buffer.from(file,'base64');
        const nombre = req.body.filename;
        const url = await UploadFileToBucket(buffer,nombre);

        let idProveedor = req.body.idProveedor;
        let idCategoria = req.body.idCategoria;
        let idMarca = req.body.idMarca;
        let modelo = req.body.modelo;
        let idTienda = req.body.idTienda;
        let cantidad = req.body.cantidad;
        let precioCosto = req.body.precioCosto;
        let precioVenta = req.body.precioVenta;
        

        const pool = await getConnection();
        if (!pool) return res.status(500).json(errorConnectionMessage);

        const generateSQL = queriesPieza();

        const ressDataToFetch = await pool
            .request()
            .input('idProveedor', sql.Int, idProveedor)
            .input('idCategoria', sql.Int, idCategoria)
            .input('idMarca', sql.Int, idMarca)
            .input('modelo', sql.VarChar, modelo)
            .input('idTienda', sql.Int, idTienda)
            .input('cantidad', sql.Int, cantidad)
            .input('precioCosto', sql.Decimal, precioCosto)
            .input('precioVenta', sql.Decimal, precioVenta)
            .input('urlImagen', sql.Int, url)
            .query(generateSQL.insertPieza);

        if (ressDataToFetch.rowsAffected[0] > 0) {
            // La inserción fue exitosa si rowsAffected es mayor que 0
            const response = {
                codigo: "00",
                message: "La inserción fue exitosa.",
            };
            return res.status(200).json(response);
        } else {
            // Si no se afectó ninguna fila, es posible que haya habido un problema en la inserción
            return res.status(500).json({ message: "No se pudo insertar la pieza." });
        }
    } catch (error) {
        console.log("Se produjo una excepcion al procesar la peticion:", error);
        response.message = "Ocurrió un error al procesar la petición";
        res.status(400).json(response);
    }
};
export const errorParamsMessage = {
    ok: false,
    data: [],
    status: 400,
    message: "Parámetros ingresados no válidos",
};
