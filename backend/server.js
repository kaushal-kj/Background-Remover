import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongoDB.js";
import userRouter from "./routes/UserRoute.js";
import imageRouter from "./routes/ImageRoute.js";

dotenv.config();

connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/images", imageRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
