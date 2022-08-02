const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bd352621ac3447',
    password: '1a3c3b41',
    database: 'heroku_3e640d8a99df2cc',
};
//mysql://:@/?reconnect=true
// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;