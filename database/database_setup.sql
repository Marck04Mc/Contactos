USE master;
GO

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'TEST_FORM')
BEGIN
    CREATE DATABASE TEST_FORM;
END
GO

USE TEST_FORM;
GO

IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Contactos]') AND type in (N'U'))
BEGIN
    CREATE TABLE Contactos (
        Id INT PRIMARY KEY IDENTITY(1,1),
        TipoIdentificacion VARCHAR(3) NOT NULL,
        Identificacion VARCHAR(20) NOT NULL,
        Nombres VARCHAR(50) NOT NULL,
        Apellido VARCHAR(50) NOT NULL,
        Telefono NUMERIC(10,0) NOT NULL,
        Direccion VARCHAR(120) NOT NULL,
        Correo VARCHAR(120) NOT NULL,
        Cliente BIT NOT NULL DEFAULT 0
    );
END
GO

-- Stored Procedure: Consultar (Listar todos)
IF OBJECT_ID('sp_ListarContactos', 'P') IS NOT NULL
    DROP PROCEDURE sp_ListarContactos;
GO

CREATE PROCEDURE sp_ListarContactos
AS
BEGIN
    SELECT * FROM Contactos;
END
GO

-- Stored Procedure: Insertar
IF OBJECT_ID('sp_CrearContacto', 'P') IS NOT NULL
    DROP PROCEDURE sp_CrearContacto;
GO

CREATE PROCEDURE sp_CrearContacto
    @TipoIdentificacion VARCHAR(3),
    @Identificacion VARCHAR(20),
    @Nombres VARCHAR(50),
    @Apellido VARCHAR(50),
    @Telefono NUMERIC(10,0),
    @Direccion VARCHAR(120),
    @Correo VARCHAR(120),
    @Cliente BIT
AS
BEGIN
    INSERT INTO Contactos (TipoIdentificacion, Identificacion, Nombres, Apellido, Telefono, Direccion, Correo, Cliente)
    VALUES (@TipoIdentificacion, @Identificacion, @Nombres, @Apellido, @Telefono, @Direccion, @Correo, @Cliente);
END
GO

-- Stored Procedure: Editar
IF OBJECT_ID('sp_EditarContacto', 'P') IS NOT NULL
    DROP PROCEDURE sp_EditarContacto;
GO

CREATE PROCEDURE sp_EditarContacto
    @Id INT,
    @TipoIdentificacion VARCHAR(3),
    @Identificacion VARCHAR(20),
    @Nombres VARCHAR(50),
    @Apellido VARCHAR(50),
    @Telefono NUMERIC(10,0),
    @Direccion VARCHAR(120),
    @Correo VARCHAR(120),
    @Cliente BIT
AS
BEGIN
    UPDATE Contactos
    SET 
        TipoIdentificacion = @TipoIdentificacion,
        Identificacion = @Identificacion,
        Nombres = @Nombres,
        Apellido = @Apellido,
        Telefono = @Telefono,
        Direccion = @Direccion,
        Correo = @Correo,
        Cliente = @Cliente
    WHERE Id = @Id;
END
GO

-- Stored Procedure: Eliminar
IF OBJECT_ID('sp_EliminarContacto', 'P') IS NOT NULL
    DROP PROCEDURE sp_EliminarContacto;
GO

CREATE PROCEDURE sp_EliminarContacto
    @Id INT
AS
BEGIN
    DELETE FROM Contactos WHERE Id = @Id;
END
GO
