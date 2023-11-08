export const queriesReparaciones = (orderBy, ordenar) => {

    const tablename = "Reparaciones";
    const primarykey = "idReparacion";

    const pagination = `ORDER BY ${ordenar} ${orderBy} OFFSET(@offset) ROWS FETCH NEXT (@limit) ROWS ONLY`;

    return {
        getAll: `SELECT * FROM ${tablename}`,
        createReparacion: `INSERT INTO ${tablename} ([modelo],[placa],[fechaIngreso],[detalles],[imagen],[idCliente],[idMarca],[idTaller]) VALUES
            (@modelo,@placa,@fechaIngreso,@detalles,@imagen,@idCliente,@idMarca,@idTaller)`,
    };
};