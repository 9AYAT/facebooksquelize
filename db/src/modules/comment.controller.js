//import { comment } from "../../models/comment.model.js"
import { comment } from "../../models/comment.model.js"
import { User } from "../../models/user.model.js"

//addcomment
export const addcomments=async(req,res,next)=>{
    const{content,PostId,UserId}=req.body
    //check exist
    const userExist=await User.findOne({where:{id:UserId,loggedin:true}})
       if(!userExist){
           return res.status(404).json({message:"user not found",success:false})
       }
      const createdPost=await comment.create({content,UserId,PostId})
      if(!createdPost){
      return res.status(500).json({message:'comment not added ',success:false})
      }
      return res.status(201).json({message:'coment added successfully',success:true})
   }
   //read comment
 export const readcomment= async(req,res,next)=>{
    const getallcomment=await comment.findAll({})
    res.json({message:"post are readed successfully",getallcomment})
   }
   //updatecomment
export const updatecomment=async(req,res,next)=>{
    const {id}=req.query
    const{content,UserId}=req.body
    const updatedcomment=await comment.update({content},{where:{id,UserId}})
    if(!updatedcomment){
        res.json({message:"cant update cmment"})
    } res.json({message:"comment are update successfully",updatedcomment})
}
//deletecomment
export const deletedcomment=async(req,res,next)=>{
    const {id}=req.query
    const{UserId}=req.body
    const deletecomment=await comment.destroy({where:{id,UserId}})
    if(!deletecomment){
        res.json({message:"cant delete"})
    } res.json({message:"comment are deleted successfully",deletecomment})
}