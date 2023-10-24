const express=require('express');
const { updateProfile, deleteProfile, getProfile } = require('../controllers/userController');
const verifyToken = require('../verifyToken');
const router=express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    // You can add other headers as needed
    next();
  });

router.route('/:id').put(verifyToken,updateProfile)
router.route('/:id').delete(verifyToken, deleteProfile)
router.route('/:id').get(getProfile)


module.exports=router;