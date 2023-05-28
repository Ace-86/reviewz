const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CRUDDB',
})


app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO reviews (reviewTitle, review) VALUES ('inception', 'good movie');"
    db.query(sqlInsert, (err, result) => {

        res.send("hello world");
    });
});

app.listen(3006, () =>{
    console.log('running port 3006')
})