/** @format */
import mongoose from "mongoose";
import express from "express";
import { UserRoutes } from "./routes/user.routes.js";
import { TodoRotues } from "./routes/todo.routes.js";
const app = express();
try {
  await mongoose.connect(
    "mongodb+srv://Alicoder001:I1NiZ7tEWL272gKI@todo.tgyzpxu.mongodb.net/todo?retryWrites=true&w=majority"
  );
  console.log("db connected");
} catch (error) {
  console.log(error);
}
app.use(express.json());
app.use("/user", UserRoutes);
app.use("/user/:user_id/todo", TodoRotues);
app.listen("3000", () => {
  console.log("server started...");
});
