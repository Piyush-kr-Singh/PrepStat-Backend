const { config } = require('dotenv');
const mysql=require('mysql2');
config();

const conn=mysql.createConnection({
    user : process.env.DB_USERNAME,
    host : process.env.DB_HOST,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DBNAME,

});

conn.connect((err)=>
{
    if(err) throw err;
    console.log("Database connected successfully");
});

module.exports =conn;