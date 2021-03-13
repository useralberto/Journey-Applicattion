import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnectio';

import task from './task';


const SharedTask = sequelize.define('sharedTask', {
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

SharedTask.hasMany(task,{
    foreingKey: 'idLista_de_metas',
    sourceKey: 'id'
});

task.belongsTo(SharedTask,{
    foreingKey: 'idLista_de_metas',
    sourceKey: 'id'
})

export default SharedTask;