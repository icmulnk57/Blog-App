const express=require('express');
const router=express.Router();
const User=require('../models/User');
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken');
const { register, login, logout, refetch } = require('../controllers/authController');
const { model } = require('mongoose');

//register

// router.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/refetch").get(refetch);


module.exports=router;