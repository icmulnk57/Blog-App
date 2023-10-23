const express=require('express');
const User=require('../models/User');
const bcrypt=require('bcrypt');
const Post=require('../models/Post');
const Comment =require('../models/Comment')

//create comment


exports.createComment=async(req,res)=>{
    try{
        const newComment=new Comment(req.body);
        const savedComment=await newComment.save();
        res.status(200).json(savedComment);

    }catch(err){
        res.status(500).json(err)
    }
}

//Update comment

exports.updateComment=async(req,res)=>{
    try{

        const updateComment=await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updateComment);

    }catch(err){
        res.status(500).json(err)
    }

}

//Delete Comment
exports.deleteComment=async(req,res)=>{
    try{
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json("Comment deleted successfully")

      

    }catch(err){
        res.status(500).json(err)
    }

}






//Get Post comment

exports.getComment=async(req,res)=>{
    try{
        const comment=await Comment.find({postId:req.params.postId});
  
        res.status(200).json(comment);

      

    }catch(err){
        res.status(500).json(err)
    }

}


