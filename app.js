const express = require('express')
const app = express()
const mongoose = require("mongoose")
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database")
//require routes
const homeRoutes = require('./routes/main') //first homepage
const classRoutes = require('./routes/classposts') //page with parent rights enabling viewing and limited commenting
const classCommentRoutes = require('./routes/classcomments') //page with parent rights enabling viewing and limited commenting

//require environment variable
require('dotenv').config({path: './config/.env'})



//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongoUrl: process.env.DB_STRING }),
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Use flash messages for errors, info, ect...
app.use(flash());

//Routes
app.use("/", homeRoutes) //homepage. Do I need a login page?
app.use("/classpost", classRoutes) //classpost routes
app.use("/classcomments", classCommentRoutes) //class comment routes

// app.get("/", (req, res) => {
//     res.send("<h1>This homepage is working</h1>")
// })

//Start Server
app.listen(process.env.PORT, async () => {
    //Connect to Mongo exported from database.js in the config folder
    await connectDB()
    console.log(`Server running on port ${process.env.PORT}`)}
    );
