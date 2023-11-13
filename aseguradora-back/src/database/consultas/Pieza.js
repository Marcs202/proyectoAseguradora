export const  queriesPieza = () =>{
    return{
        insertPieza:`insert into Piezas(idProveedor,idCategoria,idMarca,Modelo,idTienda,Cantidad,
            PrecioCosto,PrecioVenta,urlImagen) VALUES (
            @idProveedor,@idCategoria,@idMarca,@modelo,@idTienda,@cantidad,@precioCosto,
            @precioVenta,@urlImagen
        )`,
        selectProveedor:`select * from proveedores`,
        selectCategorias:`select * from categorias`,
        selectMarcas:`select * from marcas`,
        selectTiendas:`select * from tiendas`,
        updatePieza:`
        update Piezas
        set idProveedor=@idProveedor,
            idCategoria=@idCategoria,
            idMarca=@idMarca,
            Modelo=@modelo,
            idTienda=@idTienda,
            Cantidad=@cantidad,
            PrecioCosto=@PrecioCosto,
            PrecioVenta=@PrecioVenta
            where idPieza = @idPieza
        `,
        inactivarPieza:`update Piezas set estadoActivo = 2 where idPieza=@idPieza`
    }
}