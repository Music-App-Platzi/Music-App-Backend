import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'musicAppDb',
    'musicAdmin',
    'secret',
    {
        host: '3.128.32.140',
        port: 5438,
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