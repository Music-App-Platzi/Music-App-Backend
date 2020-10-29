import Sequelize from 'sequelize';
import { sequelize } from '../database/postgres';


const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    rol_id:{
        type: Sequelize.INTEGER
    },
    username:{
        type: Sequelize.TEXT
    },
    name:{
        type: Sequelize.TEXT
    },
    mail:{
        type: Sequelize.TEXT
    },
    password:{
        type: Sequelize.TEXT
    },
    thumbnail:{
        type: Sequelize.TEXT
    },
    state:{
        type: Sequelize.BOOLEAN
    }    
}, {
    timestamps:false
});

export default User;