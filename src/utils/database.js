const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

app.use(express.json());

const connectDB = () => {
    const connection = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DATABASE,
    });

    connection.connect((error) => {
        if (error) throw error;
        console.log('Conectado a la base de datos ');
        return;
    });

    connection.query('SELECT * FROM Protectora', (error, results) => {
        if (error) throw error;
        console.log(results);
    });
};

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

module.exports = { connectDB };