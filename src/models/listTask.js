import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnectio';

import task  from './task';


const ListTask = sequelize.define('listTask', {
    idLista_de_metas:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    idUsuario: {
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

ListTask.hasMany(task,{
    foreingKey: 'idLista_de_metas',
    sourceKey: 'id'
});

task.belongsTo(ListTask,{
    foreingKey: 'idLista_de_metas',
    sourceKey: 'id'
})

export default ListTask;