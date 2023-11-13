export const queriesCategorias = () => {

    return {
        //select para obtener la informacion de las piezas
        getAll: `SELECT idCategoria, NombreCategoria FROM CATEGORIAS`,
    };
};
