import Sequelize from 'sequelize';
import config from '../config';

const DB_NAME = config.DB_NAME;
const DB_USER = config.DB_USER;
const DB_PASSWORD = config.DB_PASSWORD;
const DB_HOST = config.DB_HOST;
const DB_PORT = config.DB_PORT;

export const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'postgres',
        pool: {
            max:5,
            min:0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }

)