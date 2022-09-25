const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const homeController = require("../controller/home");
const classpostsController = require("../controller/classpost");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);//home
router.get("/indexParents", homeController.getIndex);//home parents
router.get("/indexTeachers", homeController.getIndex);//home teachers

router.get("/profile", ensureAuth, classpostsController.getProfile);//classpost
router.get("/feed", ensureAuth, classpostsController.getFeed);//home

// parent login
router.get("/parentLogin", authController.getLogin);//home login page

// teacher login
router.get("/teacherLogin", authController.getLogin);//home login page
router.post("/login", authController.postLogin);//ejs form login submit action

router.get("/logout", authController.logout);//logout
router.get("/signup", authController.getSignup);//sign up page
router.post("/signup", authController.postSignup);//sign up ejs form Submit action

module.exports = router;
