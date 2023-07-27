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
    origin: ['http://localhost:5173', 'http://localhost:4173'],
    credentials: true,
  };
app.use(cors(corsOptions));

// v1 api routes
app.use('/v1', routes);

// Serve static assets in production, must be at this location of this file
if (config.env === 'development') {
  app.use(express.static('../../client/dist'));
  
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../../client', 'dist','index.html')));
}

export default app;
