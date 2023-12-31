import express, { json, urlencoded } from 'express';
import config from './config/config.js';
import cors from 'cors';
import routes from './routes/v1/index.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// parse json request body
app.use(json());

// parse urlencoded request body
app.use(urlencoded({ extended: true }));

// enable cors
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:4173', 'https://school-grading-coding-challenge-web.onrender.com'],
    credentials: true,
  };
app.use(cors(corsOptions));

// v1 api routes
app.use('/v1', routes);

export default app;
