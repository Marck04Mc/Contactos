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

const getConnection = async () => {
    try {
        const pool = await sql.connect(config);
        return pool;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error;
    }
};

module.exports = {
    getConnection,
    sql
};
