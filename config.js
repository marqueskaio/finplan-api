const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1:3306',
  user: 'root',
  password: 'Melsonbr@1',
  database: 'finplan_database'
});

module.exports = connection;
