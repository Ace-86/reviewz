const mysql = require('mysql');
const express = require('express');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anymean1$1',
    database: 'CRUDDB',
})


app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO reviews (reviewTitle, review) VALUES ('varisity boys', 'it sux');"
    db.query(sqlInsert, (err, result) => {

        res.send("hello world");
    });
});

app.listen(3001, () =>{
    console.log('running port 3001')
})