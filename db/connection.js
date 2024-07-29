import { Sequelize } from "sequelize"

export const sequelize=new Sequelize("squelize","root","",{
    host:"localhost",
    dialect:"mysql"
})
export const connectDB  = ()=>{sequelize.authenticate().then(()=>{
    console.log("db connected successfully")
}).catch((err)=>{ 
    console.log("fail to connect db")
})}
await sequelize.sync({alter:false,force:false})
export default connectDB