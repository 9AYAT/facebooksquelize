import { Router } from "express";
import { addpost, deletedpost, getallpost, getspec, updatepost } from "./post.controller.js";
const postRouter=Router()
postRouter.post("/addPost",addpost)
postRouter.get("/getallpost",getallpost)
postRouter.put("/update",updatepost)
postRouter.delete("/delete",deletedpost)
postRouter.get("/getspecific",getspec)
export default postRouter;