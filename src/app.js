import express, { json } from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import helmet from 'helmet';

//importing routes
import authRoutes from './routes/auth.routes';
import artistRoutes from './routes/artists.routes';
import playlistRoutes from './routes/playlists.routes';
import userRoutes from './routes/users.routes';
import uploadRoutes from './routes/upload.routes';
import albumRoutes from './routes/albums.routes';
import roleRoutes from './routes/roles.routes';

const app = express();

// Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
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
app.use('/api/auth', authRoutes);
//artists
app.use('/api/artists', artistRoutes);
//playlists
app.use('/api/playlists', playlistRoutes);
//users
app.use('/api/users', userRoutes);
//upload
app.use('/api/upload', uploadRoutes);
//album
app.use('/api/albums', albumRoutes);
//role
app.use('/api/roles', roleRoutes);

export default app;