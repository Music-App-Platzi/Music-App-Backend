import Sequelize from 'sequelize';
import { sequelize } from '../database/postgres';


const Playlist = sequelize.define('playlist', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_id:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.TEXT
    },
    thumbnail:{
        type: Sequelize.TEXT
    }    
}, {
    timestamps:false,
    tableName:'playlist'
});

export default Playlist;