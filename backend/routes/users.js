const express=require('express');
const { updateProfile, deleteProfile, getProfile } = require('../controllers/userController');
const verifyToken = require('../verifyToken');
const router=express.Router();

const cors=require('cors');
router.use(cors({ origin: 'https://653a059c0211585997750503--ubiquitous-piroshki-f67569.netlify.app', credentials: true }));
router.route('/:id').put(verifyToken,updateProfile)
router.route('/:id').delete(verifyToken, deleteProfile)
router.route('/:id').get(getProfile)


module.exports=router;