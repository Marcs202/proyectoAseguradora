export const queriesReparaciones = (orderBy, ordenar) => {

    const tablename = "Reparaciones";
    const primarykey = "idReparacion";

    const pagination = `ORDER BY ${ordenar} ${orderBy} OFFSET(@offset) ROWS FETCH NEXT (@limit) ROWS ONLY`;

    return {
        getAll: `SELECT * FROM ${tablename}`,
        createReparacion: `INSERT INTO ${tablename} ([modelo],[placa],[fechaIngreso],[detalles],[imagen],[idCliente],[idMarca],[idTaller],[color],[estado]) VALUES
            (@modelo,@placa,@fechaIngreso,@detalles,@imagen,@idCliente,@idMarca,@idTaller,@color,'activo')`,
        getActivos: `SELECT * FROM ${tablename} where estado = 'activo'`,
        getEnProceso: `SELECT * FROM ${tablename} where estado = 'proceso'`,
        getFinalizados: `SELECT * FROM ${tablename} where estado = 'finalizado'`,
        getRechazado: `SELECT * FROM ${tablename} where estado = 'rechazado'`,
    };
};