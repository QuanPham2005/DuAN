const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false, 
    },
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('✅ SQL Server connected');
        return pool;
    })
    .catch(err => console.error('❌ Database connection failed:', err));

module.exports = {
    sql, poolPromise,
};

