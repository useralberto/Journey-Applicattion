import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnectio';

import Task from './task.js';
import User from './user.js';

const SharedTask = sequelize.define('MetasCompartidas', {
    idListaMetas:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    compartida_con: {
        type: Sequelize.INTEGER
    },
    Usuario_idUsuario:{
        type: Sequelize.INTEGER
    },
    Metas_idMetas:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

SharedTask.hasMany(User,{
    foreingKey: 'Usuario_idUsuario',
    sourceKey: 'id'
});

user.belongsTo(SharedTask,{
    foreingKey: 'Usuario_idUsuario',
    sourceKey: 'id'
});

Task.belongsTo(sharedTask, {
    'Metas_idMetas',
    sourceKey: 'id'
});

export default SharedTask;
