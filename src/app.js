import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

// middleware
app.use(morgan('dev'));
app.use(json());

export default app;