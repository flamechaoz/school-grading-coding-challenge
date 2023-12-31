import { gradeController } from '../../controllers/grade.controller.js';
import { Router } from 'express';
import validate from '../../middlewares/validate.js';
import { gradesValidation } from '../../validations/index.js';

const gradesRoute = Router();

gradesRoute
  .route('/')
  .get(gradeController.getGrades)
  .post(validate(gradesValidation.saveGrades), gradeController.saveGrades)
  .delete(gradeController.deleteAllRecords);

export default gradesRoute;
