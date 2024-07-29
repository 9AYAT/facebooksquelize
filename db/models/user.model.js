import { DataTypes } from "sequelize"
import { sequelize } from "../connection.js"

export const User=sequelize.define("Users",{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    loggedin:{
       type:DataTypes.BOOLEAN,
       allowNull:true}
   // }
},{timestamps:true})