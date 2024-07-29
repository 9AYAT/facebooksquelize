import { Router } from "express";
import { getall, logat, logouted, signup } from "./user.controller.js";
const userRouter=Router()
userRouter.post("/signup",signup)
userRouter.post('/login',logat)
userRouter.post("/logout",logouted)
userRouter.get("/getuspost",getall)

export default userRouter