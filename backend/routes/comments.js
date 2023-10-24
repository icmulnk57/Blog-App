const express=require('express');
const { createComment, updateComment, deleteComment, getComment } = require('../controllers/commentController');
const verifyToken = require('../verifyToken');
const router=express.Router();
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://65375e69e0affd296abd7794--dulcet-jelly-c19da1.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
  
router.route('/create').post(verifyToken, createComment);
router.route('/:id').put(verifyToken,updateComment);
router.route('/:id').delete(verifyToken,deleteComment);
router.route('/posts/:postId').get(getComment);


module.exports=router;