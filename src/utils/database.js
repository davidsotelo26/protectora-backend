const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

app.use(express.json());

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

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});