import { Router } from 'express';
import { getGrades } from '../../controllers/grade.controller.js';

const gradesRoute = Router();

gradesRoute.get('/', getGrades);

export default gradesRoute;