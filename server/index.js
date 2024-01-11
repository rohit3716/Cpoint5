const express = require('express');
const app = express();
const mysql = require("mysql2");
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;



const db = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB_NAME,
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));


app.get("/api/get", ( req, res ) =>{
    const sqlGet = "SELECT * FROM grocery_table";
    db.query(sqlGet, (error, result) => {
        if( error ) 
        return new Error(error.message);
    res.send( result );
    })
})

app.post("/api/post", (req, res) => {
    const {name, quantity} = req.body;
    const sqlPost = "INSERT INTO grocery_table (name, quantity) VALUES ( ?, ?) ";
    db.query( sqlPost, [name, quantity], (error, result ) => {
        if(error) console.log(error.message);
    })
})

app.delete("/api/delete/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM grocery_table WHERE id = ? ";
    db.query( sqlRemove, id,  (error, result ) => {
        if(error) console.log(error.message);
    })
})

app.get("/api/get/:id", ( req, res ) =>{
    const {id} = req.params;
    const sqlGet = "SELECT * FROM grocery_table WHERE id = ?";
    db.query(sqlGet, id, (error, result) => {
        if( error ) 
        return new Error(error.message);
    res.send( result );
    })
})

app.put("/api/update/:id", (req, res) => {
    const {id} = req.params;
    const {name, quantity} = req.body;
    const sqlUpdate = "UPDATE grocery_table SET name = ?, quantity = ? WHERE id = ?";
    db.query( sqlUpdate, [name, quantity, id], (error, result ) => {
        if(error) console.log(error.message);
        res.send(result);
    })
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

