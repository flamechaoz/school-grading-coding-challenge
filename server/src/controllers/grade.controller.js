import catchAsync from "../utils/catchAsync.js";
import { testService } from "../services/test.service.js";
import { studentService } from "../services/student.service.js";

const getGrades = catchAsync(async (req, res) => {
  const result = {data: "Hello world"}; 
  res.send(result);
});

const saveGrades = catchAsync(async (req, res) => {
  const result = {data: "Hello world"}; 
  res.send(result);
});

const sampleSave = catchAsync(async (req, res) => {
  let studentBody = {
    'name': 'Pabs'
  };
  const student = await studentService.createStudent(studentBody);
  let testBody = {
    'grade': 89,
    'studentId': student.id
  };
  const test = await testService.createTest(testBody);
  res.send({'student': student, 'test': test});
});

export const gradeController = {
  getGrades,
  saveGrades,
  sampleSave
};
