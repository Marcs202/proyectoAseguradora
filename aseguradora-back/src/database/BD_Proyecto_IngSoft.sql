
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

CREATE TABLE Usuarios
(
	IdUsuario INT IDENTITY(1,1) primary key not null,
	auth varchar(255) not null unique,
	correo varchar(255) not null,
	nombre varchar(255) not null,
);

INSERT INTO [dbo].[Usuarios]
           ([auth]
           ,[correo]
           ,[nombre])
     VALUES
           ('P1BdB2rfchhp8RhxvLvXykIeLAo1','js8215001@gmail.com','Taller 1'),
		   ('rE03ZeFQUbVlUAKHKtTWcMPeqs32','jg447996@gmail.com','Super Admin'),
		   ('bHUpSltBvWPxSknlUcw7n4HCcOA3','jg252865@gmail.com','Aseguradora 1')
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

CREATE TABLE Tiendas
(
	idTienda INT IDENTITY(1,1),
	NombreTienda VARCHAR (50),
	DireccionTienda VARCHAR (50)

	Constraint PK_Tienda Primary Key(idTienda)
);

CREATE TABLE Piezas
(
	idPieza INT IDENTITY(1,1),
	idProveedor INT,
	idCategoria INT,
	idMarca INT,
	Modelo VARCHAR (25),
	idTienda INT,
	Cantidad INT,
	PrecioCosto DECIMAL,
	PrecioVenta DECIMAL

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
	imagen text not null,
	idCliente int foreign key references Clientes(idCliente),
	idMarca int foreign key references Marcas(idMarca),
	idTaller int foreign key references Talleres(idTaller),
);

CREATE TABLE PiezasReparacion(
IdRelacion INT IDENTITY(1,1),
IdReparacion int foreign key references Reparaciones(idReparacion),
idPieza int foreign key references Piezas(idPieza),
)

insert into Proveedores values 
('toyota'),
('mazda'),
('bmw'),
('chevrolet')

insert into Categorias values 
('radiador'),
('amortiguador'),
('escape'),
('bujia')

insert into Marcas values 
('toyota'),
('michellin'),
('momo'),
('generico')

insert into Tiendas values 
('Tienda1','Direccion1'),
('Tienda2','Direccion2'),
('Tienda3','Direccion3'),
('Tienda4','Direccion4')

insert into Piezas values 
('1','2','3','q','1','9','0','11'),
('2','3','4','w','2','8','0','22'),
('3','4','1','e','3','7','0','33'),
('4','1','2','r','4','6','0','44')

insert into Clientes values 
('Juan Perez'),
('Roberto Garcia'),
('Cesar Guzman')