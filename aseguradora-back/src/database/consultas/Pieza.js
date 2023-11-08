export const  queriesPieza = () =>{
    return{
        insertPieza:`insert into Piezas VALUES (
            @idProveedor,@idCategoria,@idMarca,@modelo,@idTienda,@cantidad,@precioCosto,
            @precioVenta,@urlImagen
        )`
    }
}