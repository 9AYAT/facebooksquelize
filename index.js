import express from "express"

//import{Sequelize,DataTypes} from "sequelize"
import { connectDB } from "./db/connection.js"
import userRouter from "./db/src/modules/user.router.js"
import postRouter from "./db/src/modules/post.router.js"
import commentRouter from "./db/src/modules/comment.router.js"
const app=express()
app.use(express.json())
const port=3000
connectDB()



app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/comment',commentRouter)





app.listen(port,()=>{(
    console.log("server is running on",port)
)})