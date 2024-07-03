
require('dotenv').config(); // Load environment variables from .env file
const mysql2 = require('mysql2');

// Create a connection pool to the database
const dbConnection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  // waitForConnections: true,
  connectionLimit: 100,
});

console.log(process.env.DB_USER)
// Attempt to connect to the database
// dbConnection.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//   } else {
//     console.log('Database connection established successfully!');
//     connection.release(); // Release the connection
//   }
// });

// Export the promise-based connection pool
module.exports = dbConnection.promise();
