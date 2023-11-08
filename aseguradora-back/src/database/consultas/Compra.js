export const queriesCompras = () => {

    return {
        //select para obtener la informacion de las piezas
        getAll: `SELECT
        P.idPieza,
        M.NombreMarca AS Marca,
        Pr.NombreProveedor AS Proveedor,
        C.NombreCategoria AS Categoria,
        T.NombreTienda AS Tienda,
        D.Departamento AS Departamento,
        P.cantidad,
        P.precioCosto,
        P.precioVenta,
        P.urlImagen
        FROM piezas AS P
        INNER JOIN Marcas AS M ON P.idMarca = M.idMarca
        INNER JOIN Proveedores AS Pr ON P.idProveedor = Pr.idProveedor
        INNER JOIN Categorias AS C ON P.idCategoria = C.idCategoria
        INNER JOIN Tiendas AS T ON P.idTienda = T.idTienda
        INNER JOIN Departamentos AS D ON T.idDepartamento=D.idDepartamento;`,
        getPiezaByDepartament: `
        SELECT
        P.idPieza,
        M.NombreMarca AS Marca,
        Pr.NombreProveedor AS Proveedor,
        C.NombreCategoria AS Categoria,
        T.NombreTienda AS Tienda,
        D.Departamento AS Departamento,
        P.cantidad,
        P.precioCosto,
        P.precioVenta,
        P.urlImagen
        FROM piezas AS P
        INNER JOIN marcas AS M ON P.idMarca = M.idMarca
        INNER JOIN proveedores AS Pr ON P.idProveedor = Pr.idProveedor
        INNER JOIN categorias AS C ON P.idCategoria = C.idCategoria
        INNER JOIN tiendas AS T ON P.idTienda = T.idTienda
        INNER JOIN Departamentos AS D ON T.idDepartamento=D.idDepartamento
        WHERE D.idDepartamento = @idDepartamento;`,
        getPiezaByCategory: `
        SELECT
        P.idPieza,
        M.NombreMarca AS Marca,
        Pr.NombreProveedor AS Proveedor,
        C.NombreCategoria AS Categoria,
        T.NombreTienda AS Tienda,
        D.Departamento AS Departamento,
        P.cantidad,
        P.precioCosto,
        P.precioVenta,
        P.urlImagen
        FROM piezas AS P
        INNER JOIN marcas AS M ON P.idMarca = M.idMarca
        INNER JOIN proveedores AS Pr ON P.idProveedor = Pr.idProveedor
        INNER JOIN categorias AS C ON P.idCategoria = C.idCategoria
        INNER JOIN tiendas AS T ON P.idTienda = T.idTienda
        INNER JOIN Departamentos AS D ON T.idDepartamento=D.idDepartamento
        WHERE C.idCategoria = @idCategoria;
        `,
        getPiezaByCategoryDepartament:`
        SELECT
        P.idPieza,
        M.NombreMarca AS Marca,
        Pr.NombreProveedor AS Proveedor,
        C.NombreCategoria AS Categoria,
        T.NombreTienda AS Tienda,
        D.Departamento AS Departamento,
        P.cantidad,
        P.precioCosto,
        P.precioVenta,
        P.urlImagen
        FROM piezas AS P
        INNER JOIN marcas AS M ON P.idMarca = M.idMarca
        INNER JOIN proveedores AS Pr ON P.idProveedor = Pr.idProveedor
        INNER JOIN categorias AS C ON P.idCategoria = C.idCategoria
        INNER JOIN tiendas AS T ON P.idTienda = T.idTienda
        INNER JOIN Departamentos AS D ON T.idDepartamento=D.idDepartamento
        WHERE C.idCategoria = @idCategoria AND D.idDepartamento=@idDepartamento;
        `,
        getPiezaById:`
        SELECT
        P.idPieza,
        M.NombreMarca AS Marca,
        Pr.NombreProveedor AS Proveedor,
        C.NombreCategoria AS Categoria,
        T.NombreTienda AS Tienda,
        D.Departamento AS Departamento,
        P.cantidad,
        P.precioCosto,
        P.precioVenta,
        P.urlImagen
        FROM piezas AS P
        INNER JOIN marcas AS M ON P.idMarca = M.idMarca
        INNER JOIN proveedores AS Pr ON P.idProveedor = Pr.idProveedor
        INNER JOIN categorias AS C ON P.idCategoria = C.idCategoria
        INNER JOIN tiendas AS T ON P.idTienda = T.idTienda
        INNER JOIN Departamentos AS D ON T.idDepartamento=D.idDepartamento
        WHERE P.idPieza=@idPieza
        `
    };
};
