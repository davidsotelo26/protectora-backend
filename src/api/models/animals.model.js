
const connectDB = require('./src/utils/database');

connectDB();


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