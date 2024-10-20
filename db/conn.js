const { config } = require('dotenv');
const mysql=require('mysql2');
config();

const conn = mysql.createPool({
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    waitForConnections: true,
    connectionLimit: 10, // Max number of connections
    queueLimit: 0       // No limit to connection queue
});

conn.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Database connected successfully');
    connection.release(); // Release the connection back to the pool
});

module.exports =conn;