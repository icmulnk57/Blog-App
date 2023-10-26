const express=require('express');
const { createComment, updateComment, deleteComment, getComment } = require('../controllers/commentController');
const verifyToken = require('../verifyToken');
const router=express.Router();
const cors=require('cors');
router.use(cors({ origin: 'http://localhost:5173', credentials: true }));
router.route('/create').post(verifyToken, createComment);
router.route('/:id').put(verifyToken,updateComment);
router.route('/:id').delete(verifyToken,deleteComment);
router.route('/posts/:postId').get(getComment);


module.exports=router;