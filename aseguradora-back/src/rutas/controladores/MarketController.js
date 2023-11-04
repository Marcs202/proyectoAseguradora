import { getConnection,sql } from "../../database/conexion.js";
import { queriesCompras } from "../../database/consultas/Compra.js";
export const GetAll = async (req, res, next) => {

    let response = {};
    try {
      const orderby = req.body.orderby || "asc";
      const ordenar = req.body.ordenar || "idPieza";
  
      const pool = await getConnection();
      if (!pool) return res.status(500).json(errorConnectionMessage);
  
      const generateSQL = queriesCompras(orderby, ordenar);
  
      const ressDataToFetch = await pool.request().query(generateSQL.getAll);
  
      if (ressDataToFetch.recordset) {
        const response = {
          codigo: "00",
          registros: ressDataToFetch.recordset,
        };
        return res.status(200).json(response);
      } else {
        return res.status(400).json(errorParamsMessage);
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
  