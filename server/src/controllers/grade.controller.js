import catchAsync from "../utils/catchAsync.js";
import { testService } from "../services/test.service.js";
import { studentService } from "../services/student.service.js";

const getGrades = catchAsync(async (req, res) => {
  const result = {data: "Hello world"}; 
  res.send(result);
});

const saveGrades = catchAsync(async (req, res) => {
  const result = studentService.createStudentWithGrades(req.body);
  res.send(req.body);
});

const sampleSave = catchAsync(async (req, res) => {
  let studentBody = {
    name: 'Pabs',
    homeworks: {
      create: {
        grade: 89,
        quarter: 2,
      }
    },
    tests: {
      create: {
        grade: 89,
        quarter: 2,
      }
    },
  };
  const student = await studentService.createStudent(studentBody);
  res.send({'student': student});
});

export const gradeController = {
  getGrades,
  saveGrades,
  sampleSave
};
