//import { User } from "../../models/user.model.js"
import bcrypt from "bcrypt"
import { comment } from "../../models/comment.model.js"
import { Post } from "../../models/post.model.js"
import { User } from "../../models/user.model.js"

export  const signup= async(req,res,next)=>{
    //get data from req
    const{username,email,password}=req.body
    //check exist
    const userExist=await User.findOne({where:{email}})
    if(userExist){
        return res.status(409).json({message:"user already exist",success:false})
    }
    //hash password
    const hashpassword=bcrypt.hashSync(password,10)
    //conn to db
    const createdUser=await User.create({username,email,password:hashpassword})
    if(!createdUser){
        return res.status(500).json({message:"fail to create ",success:false})
    }
    return res.status(201).json({message:"user created successfully",success:true,data:createdUser})
    

}
//login
export const logat=async(req,res,next)=>{
    //get data
    const{email,password}=req.body
    //check exist
    const foundaccount=await User.findOne({where:{email}})
    if(!foundaccount){
        return res.status.status(404).json({message:"user not found",success:false})
    }
    //hash
    const matchpassword=bcrypt.compareSync(password,foundaccount.password)
        if(!matchpassword){
        return res.status(401).json({message:"invalid pass",})
    }
const logged=await foundaccount.update({loggedin:true})    
    //conn to db
   // const loginAccount=await User.create({email,password})
     // if(!loginAccount){
     //   return res.status(500).json({message:"cannot login in account",success:false})
     // }
      return res.status(201).json({message:"user successfully loginto account",success:true})
}
//logout
export const logouted=async(req,res,next)=>{
    const{id}=req.query
    const logut=await User.findByPk(id)
    if(!logut){
        return res.status(404).json({message:'user not found'})
    }
    const successlog=await logut.update({loggedin:false})
    if(!successlog){
        res.status(400).json({message:"cant logout"})
    }
    return res.status(201).json({message:"logout successfully",success:true})
}
//get user post comment
export const getall=async(req,res,next)=>{
    const getuserostcomment=await User.findAll({
        include:{model:Post,attributes:["title"],include:{model:comment,attributes:["content"]}}
    })
    res.json({message:"all get successfully",getuserostcomment})
}