import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
//import{Post} from "./user.model.js"
import { User } from "./user.model.js";
export const Post =sequelize.define('Posts',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
content:{type:DataTypes.STRING,
    allowNull:false},
    //author:{
      //  type:DataTypes.STRING,
       // allowNull:false
   // }
},{timestamps:true}
)
User.hasMany(Post,{
    onUpdate:'CASCADE',onDelete:'CASCADE',foreignKey:{allowNull:false}
})
Post.belongsTo(User)
