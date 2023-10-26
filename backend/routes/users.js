const express=require('express');
const { updateProfile, deleteProfile, getProfile } = require('../controllers/userController');
const verifyToken = require('../verifyToken');
const router=express.Router();

const cors=require('cors');
router.use(cors({ origin: 'http://localhost:5173', credentials: true }));
router.route('/:id').put(verifyToken,updateProfile)
router.route('/:id').delete(verifyToken, deleteProfile)
router.route('/:id').get(getProfile)


module.exports=router;