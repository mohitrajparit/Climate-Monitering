const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const morgan =require('morgan');
const pool = require("./config/db");
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))
app.use('/api/v1/sensor-data',require('./routes/routes'))
// Connecting to database
// pool.getConnection((err) => {
//     if (err) return console.error(err.message);
  
//     console.log('Connected to the MySQL server.');
//   });
  
//   connection.end((err) => {
//     if (err) return console.error(err.message);
  
//     console.log('Close the database connection.');
//   });



const port=process.env.PORT||3000;

pool.query("SELECT 1").then(()=>{
    console.log("database connected");

    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
})
.catch((err)=>{
    console.log("error occured ",err)
})


  
  