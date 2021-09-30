const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'BBMS',
    port:'3306',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  
  module.exports = pool