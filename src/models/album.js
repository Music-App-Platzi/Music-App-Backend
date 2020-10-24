import Sequelize from 'sequelize';
import { sequelize } from '../database/postgres';

const Album = sequelize.define('albums', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    artist_id:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.TEXT
    },
    release_date:{
        type: Sequelize.DATE
    }
    
}, {
    timestamps:false
});

export default Album;