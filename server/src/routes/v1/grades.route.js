import { Router } from 'express';
import { gradeController } from '../../controllers/grade.controller.js';

const gradesRoute = Router();

gradesRoute
  .route('/')
  .get(gradeController.getGrades)
  .post(gradeController.sampleSave);

export default gradesRoute;
