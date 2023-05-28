const mysql = require('mysql');
const express = require('express');
const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Anymean1$1',
    database: 'CRUDDB'
});

con.connect(function(err){
    if(err)
    {
        console.log(err)
    } else {
        console.log("connected")

    }
})

app.get("/", (req, res) => {
    const sqlInsert = "INSERT INTO reviews (reviewTitle, review) VALUES ('GoGo Beats', 'It was okay but not really');"
    con.query(sqlInsert, (err, result) => {
        res.send("hello world");
    });
});

app.listen(3001, () =>{
    console.log('running port 3001')
})