import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";
import { Post } from "./post.model.js";
import { User } from "./user.model.js";
export const comment =sequelize.define('comments',{
    
content:{type:DataTypes.STRING,
    allowNull:false},
    //author:{
      //  type:DataTypes.STRING,
       // allowNull:false
   // }
},{timestamps:true})
User.hasMany(comment,{
    onUpdate:'CASCADE',onDelete:'CASCADE',foreignKey:{allowNull:false}
})
comment.belongsTo(User)
Post.hasMany(comment,{
    onUpdate:'CASCADE',onDelete:'CASCADE',foreignKey:{allowNull:false}
})
comment.belongsTo(Post)
