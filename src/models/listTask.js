import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnection.js';

import User from './user.js';

const ListTask = sequelize.define('ListadeMetas', {
    idLista_de_metas:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Usuario_idUsuario: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

ListTask.belongsTo(User, {
    foreingKey: 'Usuario_idUsuario',
    sourceKey: 'id'
});
export default ListTask;
