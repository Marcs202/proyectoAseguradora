
use master
drop database bdSoftTalleres

CREATE DATABASE bdSoftTalleres

USE bdSoftTalleres


--///////////////// Seccion de Repuestos ///////////////// 

CREATE TABLE Acceso
(
	IdAcceso INT IDENTITY(1,1) primary key not null,
	titulo varchar(255) not null,
	nivel int not null
);

INSERT INTO [dbo].[Acceso]
           ([titulo]
           ,[nivel])
     VALUES
           ('Super Administrador',0),
		   ('Administrador Aseguradora',1),
		   ('Administrador Taller',2),
		   ('Administrador Proveedor',3),
		   ('Usuario Aseguradora',4),
		   ('Usuario Taller',5),
		   ('Usuario Proveedor',6)
GO

CREATE TABLE Usuarios
(
	IdUsuario INT IDENTITY(1,1) primary key not null,
	auth varchar(255) not null unique,
	correo varchar(255) not null,
	nombre varchar(255) not null,
    IdAcceso INT foreign key references Acceso(IdAcceso),
);

INSERT INTO [dbo].[Usuarios]
           ([auth]
           ,[correo]
           ,[nombre]
		   ,[IdAcceso])
     VALUES
           ('P1BdB2rfchhp8RhxvLvXykIeLAo1','js8215001@gmail.com','Taller 1',(Select IdAcceso from Acceso where nivel = 2)),
		   ('rE03ZeFQUbVlUAKHKtTWcMPeqs32','jg447996@gmail.com','Super Admin',(Select IdAcceso from Acceso where nivel = 0)),
		   ('bHUpSltBvWPxSknlUcw7n4HCcOA3','jg252865@gmail.com','Aseguradora 1',(Select IdAcceso from Acceso where nivel = 1))
GO

CREATE TABLE Proveedores
(
	idProveedor INT IDENTITY(1,1),
	NombreProveedor VARCHAR (50)

	Constraint PK_Proveedor Primary Key(idProveedor)
);

CREATE TABLE Categorias
(
	idCategoria INT IDENTITY(1,1),
	NombreCategoria VARCHAR (50)

	Constraint PK_Categoria Primary Key(idCategoria)
);

CREATE TABLE Marcas
(
	idMarca INT IDENTITY(1,1),
	NombreMarca VARCHAR (50)

	Constraint PK_Marca Primary Key(idMarca)
);

CREATE TABLE Departamentos (
    idDepartamento INT PRIMARY KEY IDENTITY,
    Departamento NVARCHAR(155)
);

CREATE TABLE Tiendas
(
	idTienda INT IDENTITY(1,1),
	NombreTienda VARCHAR (50),
	idDepartamento INT,

	Constraint PK_Tienda Primary Key(idTienda),
	CONSTRAINT FK_Tiendas_Departamentos FOREIGN KEY(idDepartamento) REFERENCES Departamentos(idDepartamento) ON UPDATE CASCADE,
);

CREATE TABLE Piezas
(
	idPieza INT IDENTITY(1,1),
	urlImagen TEXT,
	idProveedor INT,
	idCategoria INT,
	idMarca INT,
	Modelo VARCHAR (255),
	idTienda INT,
	Cantidad INT,
	PrecioCosto DECIMAL,
	PrecioVenta DECIMAL,
	EstadoActivo INT DEFAULT 1

	Constraint PK_Pieza Primary Key(idPieza)
	
	CONSTRAINT FK_PiezaProveedor FOREIGN KEY(idProveedor) REFERENCES Proveedores(idProveedor) ON UPDATE CASCADE,
	CONSTRAINT FK_PiezaCategoria FOREIGN KEY(idCategoria) REFERENCES Categorias(idCategoria) ON UPDATE CASCADE,
	CONSTRAINT FK_PiezaMarca FOREIGN KEY(idMarca) REFERENCES Marcas(idMarca) ON UPDATE CASCADE,
	CONSTRAINT FK_PiezaTienda FOREIGN KEY(idTienda) REFERENCES Tiendas(idTienda) ON UPDATE CASCADE,
);

--///////////////// Seccion de Talleres ///////////////// 

CREATE TABLE Clientes 
(
	idCliente INT IDENTITY(1,1),
	NombreCliente VARCHAR (50)
	
	Constraint PK_Cliente Primary Key(idCliente)
);

CREATE TABLE Aseguradoras
(
	idAseguradora INT IDENTITY(1,1),
	NombreAseguradora VARCHAR (50),
	NumContactoAseg VARCHAR (15),
	eMailAseg VARCHAR (50),
	IdUsuario INT foreign key references Usuarios(IdUsuario),
	Constraint PK_Aseguradora Primary Key(idAseguradora)
);

INSERT INTO [dbo].[Aseguradoras]
           ([NombreAseguradora]
           ,[NumContactoAseg]
           ,[eMailAseg]
           ,[IdUsuario])
     VALUES
           ((SELECT nombre from Usuarios where nombre = 'Aseguradora 1'),
		   '6115-3009',
		   (SELECT correo from Usuarios where nombre = 'Aseguradora 1'),
		   (SELECT IdUsuario from Usuarios where nombre = 'Aseguradora 1'))
GO

CREATE TABLE Talleres 
(
	idTaller INT IDENTITY(1,1),
	NombreTaller VARCHAR (50),
	DireccionTaller VARCHAR (50),
	idAseguradora INT foreign key references Aseguradoras(idAseguradora),
	IdUsuario INT foreign key references Usuarios(IdUsuario),
	Constraint PK_Taller Primary Key(idTaller)
);

INSERT INTO [dbo].[Talleres]
           ([NombreTaller]
           ,[DireccionTaller]
           ,[idAseguradora]
           ,[IdUsuario])
     VALUES
           ((SELECT nombre from Usuarios where nombre = 'Taller 1'),
		   'Plaza Soyapango',
		   (SELECT idAseguradora from Aseguradoras where NombreAseguradora = 'Aseguradora 1'),
		   (SELECT IdUsuario from Usuarios where nombre = 'Taller 1'))
GO

CREATE TABLE Reparaciones
(
	idReparacion INT IDENTITY(1,1) primary key not null,
	modelo varchar(255) not null,
	placa varchar(255) not null,
	fechaIngreso datetime2 default getdate(),
	detalles varchar(500) not null,
	color varchar(50) not null,
	imagen text not null,
	estado varchar(50) default 'activo',
	comentario text,
	idCliente int foreign key references Clientes(idCliente),
	idMarca int foreign key references Marcas(idMarca),
	idTaller int foreign key references Talleres(idTaller),
);

CREATE TABLE Cotizaciones (
    CotizacionID INT PRIMARY KEY IDENTITY(1,1),
    FechaCotizacion DATETIME DEFAULT GETDATE(), 
    Costo DECIMAL
);

CREATE TABLE CotizacionPiezas (
    idCotizacionesPiezas INT PRIMARY KEY IDENTITY(1,1),
    idCotizacion INT,
    idPieza INT, 
    Cantidad INT
	
	CONSTRAINT FK_PiezaCotizacion FOREIGN KEY(idPieza) REFERENCES Piezas(idPieza) ON UPDATE CASCADE,
);

CREATE TABLE PiezasReparacion(
	IdRelacion INT IDENTITY(1,1),
	IdReparacion int foreign key references Reparaciones(idReparacion),
	CotizacionID int foreign key references Cotizaciones(CotizacionID),
)

insert into Proveedores values 
('Toyota'),
('Mazda'),
('BMW'),
('Chevrolet'),
('generico'),
('Hyundai')

insert into Categorias values 
('llanta'),
('Radiador'),
('Amortiguador'),
('Escape'),
('Bujia'),
('Aire acondicionado'),
('Resortes')

insert into Marcas values 
('Ford'),
('Toyota'),
('Michellin'),
('Momo'),
('generico'),
('Mazda'),
('Kia'),
('Hyundai'),
('Mitsubishi')

insert into Departamentos values 
('Ahuachapán'),
('Cabañas'),
('Chalatenango'),
('Cuscatlán'),
('La Libertad'),
('Morazán'),
('La Paz'),
('Santa Ana'),
('San Miguel'),
('San Salvador'),
('San Vicente'),
('Sonsonate'),
('La Unión'),
('Usulután')

insert into Tiendas values
('Tienda1',1),
('Tienda2',2),
('Tienda3',3),
('Tienda4',4),
('Tienda5',5),
('Tienda6',6),
('Tienda7',7),
('Tienda8',8),
('Tienda9',9),
('Tienda0',10),
('TiendaA',11),
('TiendaB',12),
('TiendaC',13),
('TiendaD',14)

insert into Clientes values 
('Juan Perez'),
('Roberto Garcia'),
('Cesar Guzman')


---!Procedimiento almacenado para ejecutar la compra
CREATE TYPE PiezaTabla AS TABLE 
(
    PiezaID INT,
    Cantidad INT
);
---PROCEDIMIENTO PARA COMPRAR 

CREATE PROCEDURE RealizarCompra
    @CotizacionID INT
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;
        
		-- Obtener las piezas y las cantidades de la cotización
        DECLARE @PiezasCotizacion AS PiezaTabla;
        INSERT INTO @PiezasCotizacion (PiezaID, Cantidad)
        SELECT idPieza, Cantidad FROM CotizacionPiezas WHERE idCotizacion = @CotizacionID;

        -- Verificar que hay suficientes piezas disponibles
        DECLARE @PiezaID INT, @Cantidad INT, @CantidadDisponible INT;
        DECLARE piezas_cursor CURSOR FOR 
        SELECT PiezaID, Cantidad FROM @PiezasCotizacion;
        OPEN piezas_cursor;
        FETCH NEXT FROM piezas_cursor INTO @PiezaID, @Cantidad;
        WHILE @@FETCH_STATUS = 0
        BEGIN
            SELECT @CantidadDisponible = Cantidad FROM Piezas WHERE idPieza = @PiezaID;
            IF @Cantidad > @CantidadDisponible
            BEGIN
                RAISERROR ('No hay suficientes piezas disponibles para realizar la compra.', 16, 1);
            END
            FETCH NEXT FROM piezas_cursor INTO @PiezaID, @Cantidad;
        END
        CLOSE piezas_cursor;
        DEALLOCATE piezas_cursor;

        -- Realizar la compra
        DECLARE piezas_cursor CURSOR FOR 
        SELECT PiezaID, Cantidad FROM @PiezasCotizacion;
        OPEN piezas_cursor;
        FETCH NEXT FROM piezas_cursor INTO @PiezaID, @Cantidad;
        WHILE @@FETCH_STATUS = 0
        BEGIN
            UPDATE Piezas SET Cantidad = Cantidad - @Cantidad WHERE idPieza = @PiezaID;
            FETCH NEXT FROM piezas_cursor INTO @PiezaID, @Cantidad;
        END
        CLOSE piezas_cursor;
        DEALLOCATE piezas_cursor;

        COMMIT;
    END TRY
    BEGIN CATCH
        ROLLBACK;
        RAISERROR ('Ocurrió un error al realizar la compra.', 16, 1);
    END CATCH
END
