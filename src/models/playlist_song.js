import Sequelize from 'sequelize';
import { sequelize } from '../database/postgres';

const Playlist_song = sequelize.define('playlist_songs', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    playlist_id: {
        type: Sequelize.INTEGER
    },
    song_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps:false,
    tableName: 'playlist_songs'
});

export default Playlist_song;