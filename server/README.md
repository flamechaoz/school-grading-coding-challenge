# RESTful API Node Server

This is the backend server for the School Grading Coding Challenge by Edukasyon.ph

## Quick Start
Make sure to have yarn installed.
Install the dependencies:
```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Database Structure](#database-structure)
- [Environment Variables](#environment-variables)
- [Commands](#commands)
- [Validation](#validation)

## Features

- **MySQL database**: [MySQL](https://www.mysql.com/) with object data modeling using [Prisma](https://www.prisma.io/)
- **Validation**: request data validation using [Joi](https://github.com/hapijs/joi)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

## Database Structure

TO DO

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

# Database
DATABASE='school-grading-coding-challenge'
USERNAME=''
HOST=''
PASSWORD=''
DATABASE_URL=''

# Port number
PORT=3000
```

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

## Validation

Request data is validated using [Joi](https://joi.dev/). Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.

The validation schemas are defined in the `src/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.

```javascript
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
```
