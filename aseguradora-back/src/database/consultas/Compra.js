export const queriesCompras = (orderBy, ordenar) => {

    const tablename = "Piezas";
    // const primarykey = "idReparacion";
    // const pagination = `ORDER BY ${ordenar} ${orderBy} OFFSET(@offset) ROWS FETCH NEXT (@limit) ROWS ONLY`;

    return {
        getAll: `SELECT * FROM ${tablename}`,
    };
};