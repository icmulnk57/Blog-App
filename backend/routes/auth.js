const express=require('express');
const router=express.Router();
const User=require('../models/User');
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken');
const { register, login, logout, refetch } = require('../controllers/authController');
const { model } = require('mongoose');
const cors=require('cors');

//register
router.use(cors({ origin: 'http://localhost:5173', credentials: true }));
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/refetch").get(refetch);


module.exports=router;