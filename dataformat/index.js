const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true, limit : '10mb'}));
app.use(cors());

//routes

const cmdRoute = require('./routes/cmd');

app.get("/",(req,res)=> res.json({message: "setup success !!"}));
app.use("/cmd",cmdRoute);
const PORT= process.env.PORT || 4000
app.listen(PORT,()=>console.log("Server is up and running"));
