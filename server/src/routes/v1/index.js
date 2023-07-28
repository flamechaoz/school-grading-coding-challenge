import express from 'express';
import gradesRoute from './grades.route.js';

const routes = express.Router();

const defaultRoutes = [
  {
    path: '/grades',
    route: gradesRoute,
  },
];

defaultRoutes.forEach((route) => {
  routes.use(route.path, route.route);
});

export default routes;
