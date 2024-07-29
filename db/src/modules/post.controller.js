//import { Post } from "../../models/post.model.js"
import { Post } from "../../models/post.model.js"
import { User } from "../../models/user.model.js"

//addpost
export const addpost=async(req,res,next)=>{
    const{title,content,UserId}=req.body
    //check exist
    const userExist=await User.findOne({where:{id:UserId,loggedin:true}})
       if(!userExist){
           return res.status(404).json({message:"user not found",success:false})
       }
      const createdPost=await Post.create({title,content,UserId})
      if(!createdPost){
      return res.status(500).json({message:'post not added ',success:false})
      }
      return res.status(201).json({message:'post added successfully',success:true})
   }
   //getallpost
  export const getallpost=async(req,res,next)=>{
    const getallpost=await Post.findAll({})
    res.json({message:"post are readed successfully",getallpost})
}
//updatepost
export const updatepost=async(req,res,next)=>{
    const {id}=req.query
    const{title,UserId}=req.body
    //const findid=await User.findByPk(id)
    //if(!findid){
     //   return res.json({message:"user not founded"})
    //}
    const updatedpost=await Post.update({title},{where:{id,UserId}})
    if(!updatedpost){
        res.json({message:"cant update"})
    } res.json({message:"post are update successfully",updatedpost})
}
//delete
//export const deletedpost= async(req,res,next)=>{
 //   const {id}=req.query
  //  const{UserId}=req.body
   // const deletepost=await Post.destroy({where:{id,UserId}})
  //  if(!deletepost){
    //    res.json({message:"cant delete"})
    //} res.json({message:"post are deleted successfully",deletepost})
//})
//delete
export const deletedpost=async(req,res,next)=>{
    const {id}=req.query
    const{UserId}=req.body
    const deletepost=await Post.destroy({where:{id,UserId}})
    if(!deletepost){
        res.json({message:"cant delete"})
    } res.json({message:"post are deleted successfully",deletepost})
}

//get specificpost
export const getspec=async(req,res,next)=>{
    const getspecific=await Post.findAll({
      include:{model:User}
    })
    res.json({message:"post get success",getspecific})
 }