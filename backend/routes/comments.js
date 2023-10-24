const express=require('express');
const { createComment, updateComment, deleteComment, getComment } = require('../controllers/commentController');
const verifyToken = require('../verifyToken');
const router=express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    // You can add other headers as needed
    next();
  });
router.route('/create').post(verifyToken, createComment);
router.route('/:id').put(verifyToken,updateComment);
router.route('/:id').delete(verifyToken,deleteComment);
router.route('/posts/:postId').get(getComment);


module.exports=router;