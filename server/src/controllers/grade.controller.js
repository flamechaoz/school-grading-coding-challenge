import catchAsync from "../utils/catchAsync.js";
import httpStatus from "http-status";
import { recordService } from "../services/record.service.js";
import dropSmallest from "../utils/dropSmallest.js";

const deleteAllRecords = catchAsync(async (req, res) => {
  await recordService.deleteAllRecords();

  res.status(httpStatus.NO_CONTENT).send();
});

const getGrades = catchAsync(async (req, res) => {
  const allRecords = await recordService.getAllRecords();

  // prepare data
  let activeQuarter = 1;
  const data = [];

  res.send(allRecords);
});

const saveGrades = catchAsync(async (req, res) => {
  await Promise.all(req.body.map(async record => {
    // ready records
    const tests = [];
    const homeworks = [];

    // drop smalles grades from homeworks and tests
    record.homework = dropSmallest(record.homework);
    record.test = dropSmallest(record.test);

    // ready homeworks and tests data
    record.test.forEach(testGrade => {
      tests.push({grade: testGrade});
    });

    record.homework.forEach(homeworkGrade => {
      homeworks.push({grade: homeworkGrade});
    });

    // check if theres an existing record
    const findRecord = await recordService.getRecord(record.name, record.quarter);
    
    // clear records and insert new records if yes
    if(findRecord){
      await recordService.deleteRecords(findRecord.id, record.quarter);

      await recordService.addRecords(findRecord.id, homeworks, tests);
    }
    // create new student record with grades
    else{
      await recordService.createRecords(record.name, record.quarter, tests, homeworks);
    }

  }));
  res.send({result: 'Create finished.'});
});

export const gradeController = {
  deleteAllRecords,
  getGrades,
  saveGrades
};
