import express from "express";
import {
  classController,
  studentController,
  createStudentController,
} from "../controller/adminController";

const adminRouter = express.Router();

adminRouter.get("/class", classController);
adminRouter.get("/student", studentController);

adminRouter.post("/createStudent", createStudentController);

export default adminRouter;
