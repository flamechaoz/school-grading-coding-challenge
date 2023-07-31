import catchAsync from "../utils/catchAsync.js";
import { studentService } from "../services/student.service.js";

const getGrades = catchAsync(async (req, res) => {
  const result = {data: "Hello world"}; 
  res.send(result);
});

const saveGrades = catchAsync(async (req, res) => {
  await Promise.all(req.body.map(async record => {
    // ready records
    const tests = [];
    const homeworks = [];

    // ready homeworks and tests data
    record.test.forEach(testGrade => {
      tests.push({quarter: record.quarter, grade: testGrade});
    });

    record.homework.forEach(homeworkGrade => {
      homeworks.push({quarter: record.quarter, grade: homeworkGrade});
    });

    // check if theres an existing student
    const findStudent = await studentService.getStudentByName(record.name);
    
    // clear records and insert new records if yes
    if(findStudent){
      await studentService.deleteStudentsRecords(findStudent.id, record.quarter);

      await studentService.addStudentRecords(findStudent.id, tests, homeworks);
    }
    // create new student record with grades
    else{
      await studentService.createStudentWithGrades(record.name, tests, homeworks);
    }

  }));
  res.send({result: 'Create finished.'});
});

const sampleSave = catchAsync(async (req, res) => {
  // check if theres an existing student
  const findStudent = await studentService.getStudentByName('Pabs');
  let result;
  // clear records and insert new records if yes
  if(findStudent){
    result = await studentService.deleteStudentsRecords(findStudent);
  }

  res.send({'result': result});
});

export const gradeController = {
  getGrades,
  saveGrades,
  sampleSave
};
