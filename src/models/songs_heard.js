import Sequelize from 'sequelize';
import { sequelize } from '../database/postgres';


const User = sequelize.define('songs_heard', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    song_id:{
        type: Sequelize.INTEGER
    },
    user_id:{
        type: Sequelize.INTEGER
    },
    like:{
        type: Sequelize.BOOLEAN
    },
    playbacks:{
        type: Sequelize.INTEGER
    },
    heard_at:{
        type: Sequelize.DATE
    }  
}, {
    timestamps:false,
    tableName:'songs_heard'
});

export default User;