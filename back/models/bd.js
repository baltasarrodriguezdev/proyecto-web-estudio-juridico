require('dotenv').config();
console.log('DB:', process.env.MYSQL_DB_NAME);

const mysql = require('mysql2');
const util = require('util');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT), // <-- CLAVE
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});

pool.query = util.promisify(pool.query);
module.exports = pool;