import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import userRoutes from './routes/users.routes';
import uploadRoutes from './routes/upload.routes';

const app = express();

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// middleware
app.use(morgan('dev'));
app.use(json());

//users
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes);

export default app;