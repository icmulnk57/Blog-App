const express=require('express');
const { updateProfile, deleteProfile, getProfile } = require('../controllers/userController');
const verifyToken = require('../verifyToken');
const router=express.Router();


router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
  
router.route('/:id').put(verifyToken,updateProfile)
router.route('/:id').delete(verifyToken, deleteProfile)
router.route('/:id').get(getProfile)


module.exports=router;