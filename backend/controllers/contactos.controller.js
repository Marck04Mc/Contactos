const { getConnection, sql } = require('../db');

const getContactos = async (req, res) => {
    console.log('Request received: getContactos');
    try {
        const pool = await getConnection();
        console.log('Database connected, executing sp_ListarContactos');
        const result = await pool.request().execute('sp_ListarContactos');
        console.log('Query result:', result.recordset);
        res.json(result.recordset);
    } catch (error) {
        console.error('Error in getContactos:', error);
        res.status(500).send(error.message);
    }
};

const createContacto = async (req, res) => {
    console.log('Request received: createContacto');
    console.log('Payload:', req.body);
    const { TipoIdentificacion, Identificacion, Nombres, Apellido, Telefono, Direccion, Correo, Cliente } = req.body;
    try {
        const pool = await getConnection();
        console.log('Database connected, executing sp_CrearContacto');
        await pool.request()
            .input('TipoIdentificacion', sql.VarChar, TipoIdentificacion)
            .input('Identificacion', sql.VarChar, Identificacion)
            .input('Nombres', sql.VarChar, Nombres)
            .input('Apellido', sql.VarChar, Apellido)
            .input('Telefono', sql.Numeric, Telefono)
            .input('Direccion', sql.VarChar, Direccion)
            .input('Correo', sql.VarChar, Correo)
            .input('Cliente', sql.Bit, Cliente)
            .execute('sp_CrearContacto');
        console.log('Contact created successfully');
        res.json({ message: 'Contacto creado exitosamente' });
    } catch (error) {
        console.error('Error in createContacto:', error);
        res.status(500).send(error.message);
    }
};

const updateContacto = async (req, res) => {
    const { Id } = req.params;
    const { TipoIdentificacion, Identificacion, Nombres, Apellido, Telefono, Direccion, Correo, Cliente } = req.body;
    try {
        const pool = await getConnection();
        await pool.request()
            .input('Id', sql.Int, Id)
            .input('TipoIdentificacion', sql.VarChar, TipoIdentificacion)
            .input('Identificacion', sql.VarChar, Identificacion)
            .input('Nombres', sql.VarChar, Nombres)
            .input('Apellido', sql.VarChar, Apellido)
            .input('Telefono', sql.Numeric, Telefono)
            .input('Direccion', sql.VarChar, Direccion)
            .input('Correo', sql.VarChar, Correo)
            .input('Cliente', sql.Bit, Cliente)
            .execute('sp_EditarContacto');
        res.json({ message: 'Contacto actualizado exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteContacto = async (req, res) => {
    const { Id } = req.params;
    try {
        const pool = await getConnection();
        await pool.request()
            .input('Id', sql.Int, Id)
            .execute('sp_EliminarContacto');
        res.json({ message: 'Contacto eliminado exitosamente' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getContactos,
    createContacto,
    updateContacto,
    deleteContacto
};
