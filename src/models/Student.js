import mongoose from "mongoose";
// mongo db  와 node js 를 연결시켜주는 것

const Schema = mongoose.Schema;

const Student = new Schema(
  {
    //정의
    //required = 필수값이냐?
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    ban: {
      type: Number,
      required: true,
    },
    birth: {
      type: String,
      required: true,
    },
    hobby: {
      type: String,
      required: true,
    },
  },
  {
    //옵션
    versionKey: false,
  }
);

export default mongoose.model(`Student`, Student, `Student`);
//                              누군데     내가만든거  프로젝트에 뭐라고 쓸건데
