const express=require('express');
const { createPost, updatePost, deletePost, getPost, getSinglePost, getPostbyId } = require('../controllers/postController');
const verifyToken = require('../verifyToken');
const router=express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://65375e69e0affd296abd7794--dulcet-jelly-c19da1.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
  
router.route('/create').post(verifyToken, createPost);
router.route('/:id').put(verifyToken,updatePost);
router.route('/:id').delete(verifyToken,deletePost);
router.route('/').get(getPost);
router.route('/:id').get(getPostbyId);
router.route('/user/:userId').get(getSinglePost);





module.exports=router;