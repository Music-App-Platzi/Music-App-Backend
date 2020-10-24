import Sequelize from 'sequelize';
import { sequelize } from '../database/postgres';

const Song = sequelize.define('songs', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    album_id:{
        type: Sequelize.INTEGER
    },
    name:{
        type: Sequelize.TEXT
    },
    duration:{
        type: Sequelize.TIME
    },
    song_link:{
        type: Sequelize.TEXT
    },
    thumbnail:{
        type: Sequelize.TEXT
    },
    playbacks:{
        type: Sequelize.INTEGER
    },
    genre:{
        type: Sequelize.TEXT
    }
    
}, {
    timestamps:false
});

export default Song;