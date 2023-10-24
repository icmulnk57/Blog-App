const express=require('express');
const router=express.Router();
const User=require('../models/User');
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken');
const { register, login, logout, refetch } = require('../controllers/authController');
const { model } = require('mongoose');

//register
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://65375e69e0affd296abd7794--dulcet-jelly-c19da1.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
  
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/refetch").get(refetch);


module.exports=router;