import Sequelize from 'sequelize';
import { sequelize } from '../database/postgres';

const Role = sequelize.define('roles', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT
    },
    slug:{
        type: Sequelize.TEXT
    },
    description:{
        type: Sequelize.TEXT
    }
    
}, {
    timestamps:false
});

export default Role;