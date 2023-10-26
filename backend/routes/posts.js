const express=require('express');
const { createPost, updatePost, deletePost, getPost, getSinglePost, getPostbyId } = require('../controllers/postController');
const verifyToken = require('../verifyToken');
const router=express.Router();


router.route('/create').post(verifyToken, createPost);
router.route('/:id').put(verifyToken,updatePost);
router.route('/:id').delete(verifyToken,deletePost);
router.route('/').get(getPost);
router.route('/:id').get(getPostbyId);
router.route('/user/:userId').get(getSinglePost);





module.exports=router;