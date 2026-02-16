const sql = require('mssql/msnodesqlv8');
require('dotenv').config();

const connectionString = `Driver={ODBC Driver 17 for SQL Server};Server=${process.env.DB_SERVER};Database=${process.env.DB_DATABASE};Trusted_Connection=yes;`;

const config = {
    connectionString,
    options: {
        trustedConnection: true,
        enableArithAbort: true
    }
};

const viewData = async () => {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT * FROM Contactos');
        console.table(result.recordset);
        process.exit(0);
    } catch (error) {
        console.error('Error fetching data:', error);
        process.exit(1);
    }
};

viewData();
