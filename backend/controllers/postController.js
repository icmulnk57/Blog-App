const express=require('express');
const User=require('../models/User');
const bcrypt=require('bcrypt');
const Post=require('../models/Post');
const Comment =require('../models/Comment')

//create post 


exports.createPost=async(req,res)=>{
    try{
        
        const newPost=new Post(req.body);
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);

    }catch(err){
        res.status(500).json(err)
    }
}

//Update post

exports.updatePost=async(req,res)=>{
    try{

        const updatePost=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatePost);

    }catch(err){
        res.status(500).json(err)
    }

}

//Delete post 
exports.deletePost=async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
        await Comment.deleteMany({postId:req.params.id})
        res.status(200).json("Post deleted successfully")

      

    }catch(err){
        res.status(500).json(err)
    }

}


//GET Post

exports.getPost=async(req,res)=>{

    const query=req.query
 
    try{
        const searchFilter={
            title:{$regex:query.search, $options:"i"} //here i ahve implementes search filter and that i is for for all alpha cases 
        }

        const post=await Post.find(query.search?searchFilter:null);  //here  if query is made the it will based on query if not query then it will show the all post 
  
        res.status(200).json(post);

      

    }catch(err){
        res.status(500).json(err)
    }

}


// get single post


exports.getPostbyId=async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
  
        res.status(200).json(post);

      

    }catch(err){
        res.status(500).json(err)
    }

}



//getSINGLE USER POST

exports.getSinglePost=async(req,res)=>{
    try{
        const post=await Post.find({userId:req.params.userId});
  
        res.status(200).json(post);

      

    }catch(err){
        res.status(500).json(err)
    }

}




