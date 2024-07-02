require('dotenv').config(); // Load environment variables from .env file
const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
  host:'localhost', // Ensure you also specify the host
  user:'hulezak',
  database:"evangadi-db",
  password:"1593",
  waitForConnections: true,
  connectionLimit: 10,

});

console.log(process.env.JWT_SECRET);

module.exports = dbConnection.promise();

