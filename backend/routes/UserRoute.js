import express from "express";
import { getMe, login, register } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/me",getMe)

export default userRouter;
