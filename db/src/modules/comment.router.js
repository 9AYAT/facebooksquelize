import { Router } from "express";
import { addcomments, deletedcomment, readcomment, updatecomment } from "./comment.controller.js";
const commentRouter=Router()
commentRouter.post("/addcomment",addcomments)
commentRouter.get("/getallcomment",readcomment)
commentRouter.put("/updatecomment",updatecomment)

commentRouter.delete("/deletecomment",deletedcomment)




export default commentRouter
