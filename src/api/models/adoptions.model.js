const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

connection.query(function (err, results, fields) {
    if (err) {
        console.log(err.message);
    }
});

connection.end();
