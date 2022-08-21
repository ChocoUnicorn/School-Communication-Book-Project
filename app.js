const express = require('express')
const app = express()
const mongoose = require("mongoose")
const PORT = 5555
const connectDB = require("./config/database")

// const TodoTask = require("./models/TodoTask");
const homeRoutes = require('./routes/login') //first homepage
const editRoutes = require('./routes/edit') //page with teacher rights enabling data entry
const dashRoutes = require('./routes/dashboard') //page with parent rights enabling viewing and limited commenting
require('dotenv').config({path: './config/.env'})

//Connect to Mongo exported from database.js in the config folder
connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/login", homeRoutes) //homepage. Do I need a login page?
app.use("/edit", editRoutes) //teacher pages
app.use("/dashboard", dashRoutes) //parents pages


app.get("/", (req, res) => {
    res.send("<h1>This homepage is working</h1>")
})

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));