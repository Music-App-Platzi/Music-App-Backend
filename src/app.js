import express, { json } from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import helmet from 'helmet';

// import routes
import authRoutes from './routes/auth.routes';

const app = express();

// settings
app.set('pkg', pkg);

// middleware
app.use(morgan('dev'));
app.use(json());
app.use(helmet());

// welcome routes
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version 
    })
})

// routes
app.use('/api/auth', authRoutes)

export default app;