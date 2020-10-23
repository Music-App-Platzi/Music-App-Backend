import Sequelize from 'sequelize';
import { sequelize } from '../database/postgres';

const Artist = sequelize.define('artists', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    }
}, {
    timestamps:false
});

export default Artist;

