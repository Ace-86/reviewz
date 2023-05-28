const mysql = require('mysql');
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
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

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {
    const reviewTitle = req.body.reviewTitle
    const review = req.body.review
    const sqlInsert = "INSERT INTO reviews (reviewTitle, review) VALUES (?,?)"
    con.query(sqlInsert, [reviewTitle, review], (err, result) =>{
        console.log(result)
    })
});

app.listen(3001, () =>{
    console.log('running port 3001')
})