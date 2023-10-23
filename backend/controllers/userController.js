const express=require('express');
const User=require('../models/User');
const bcrypt=require('bcrypt');
const Post=require('../models/Post');
const Comment =require('../models/Comment')



//Update user profile

exports.updateProfile=async(req,res)=>{
    try{

        if(req.body.password){
            const salt=await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hashSync(req.body.password,salt);
        }
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)

    }catch(err){
        res.status(500).json(err)
    }

}

//Delete user 
exports.deleteProfile=async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
    //so when deleting user the post & comment  should also be deleted
        await Post.deleteMany({userId:req.params.id})
        await Comment.deleteMany({userId:req.params.id})
        res.status(200).json("user has been deleted!")
        
    }catch(err){
        res.status(500).json(err)
    }

}


//GET USER

exports.getProfile=async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        const {password, ...info}=user._doc;
        res.status(200).json(info);

      

    }catch(err){
        res.status(500).json(err)
    }

}

