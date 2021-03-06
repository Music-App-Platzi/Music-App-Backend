import { config } from 'dotenv';
config();

export default {
    
    SECRET: process.env.AUTH_JWT_SECRET,
    PORT: process.env.PORT || 3000,

    BUCKET_NAME: process.env.BUCKET_NAME,
    IAM_USER_KEY: process.env.IAM_USER_KEY,
    IAM_USER_SECRET: process.env.IAM_USER_SECRET,
    
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT

}