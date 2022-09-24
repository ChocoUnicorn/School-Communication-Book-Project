const express = require('express')
const app = express()
const mongoose = require("mongoose")
// const PORT = 5555
const connectDB = require("./config/database")

// const TodoTask = require("./models/TodoTask");
const homeRoutes = require('./routes/login') //first homepage
const authRoutes = require('./routes/auth') //Authentication page for middleware
const regRoutes = require('./routes/register') //first homepage
const editRoutes = require('./routes/edit') //page with teacher rights enabling data entry
const dashRoutes = require('./routes/dashboard') //page with parent rights enabling viewing and limited commenting
const classRoutes = require('./routes/classroutes') //page with parent rights enabling viewing 
require('dotenv').config({path: './config/.env'})



//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/login", homeRoutes) //homepage. Do I need a login page?
app.use("/register", regRoutes) //parents pages
app.use("/auth", authRoutes) //authentication pages
app.use("/edit", editRoutes) //teacher pages
app.use("/dashboard", dashRoutes) //parents pages
app.use("/classpost", classRoutes) 

app.get("/", (req, res) => {
    res.send("<h1>This homepage is working</h1>")
})

//Start Server
app.listen(process.env.PORT, async () => {
    //Connect to Mongo exported from database.js in the config folder
    await connectDB()
    console.log(`Server running on port ${process.env.PORT}`)}
    );
