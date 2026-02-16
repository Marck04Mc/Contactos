const sql = require('mssql/msnodesqlv8');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const connectionString = `Driver={ODBC Driver 17 for SQL Server};Server=${process.env.DB_SERVER};Database=master;Trusted_Connection=yes;`;

const config = {
    connectionString,
    options: {
        trustedConnection: true,
        enableArithAbort: true
    }
};

const setupDatabase = async () => {
    try {
        const pool = await sql.connect(config);
        const sqlFilePath = path.join(__dirname, '../database/database_setup.sql');
        const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

        // Split by GO statements (case insensitive, surrounding whitespace)
        const commands = sqlContent.split(/^\s*GO\s*$/im);

        for (const command of commands) {
            if (command.trim()) {
                await pool.request().query(command);
                console.log('Executed command successfully.');
            }
        }

        console.log('Database setup completed.');
        process.exit(0);

    } catch (error) {
        console.error('Error setting up database:', error);
        process.exit(1);
    }
};

setupDatabase();
