const express=require('express');
const router=express.Router();
const User=require('../models/User');
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken');
const { register, login, logout, refetch } = require('../controllers/authController');
const { model } = require('mongoose');
const cors=require('cors');

//register
router.use(cors({ origin: 'https://653a059c0211585997750503--ubiquitous-piroshki-f67569.netlify.app', credentials: true }));

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route('/api/refetch', cors({ origin: 'https://653a059c0211585997750503--ubiquitous-piroshki-f67569.netlify.app', credentials: true }));
router.route("/refetch").get(refetch);


module.exports=router;