import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnection.js';

import ListTask from './listTask.js';

const Task = sequelize.define('Metas', {
    idMetas:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Titulo: {
        type: Sequelize.TEXT
    },
    Descripcion:{
        type: Sequelize.TEXT
    },
    Progreso:{
        type: Sequelize.INTEGER
    },
    Estado:{
        type: Sequelize.TEXT
    },
    ListadeMetas_idLista_de_metas:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

Task.hasMany( ListTask, {
    foreingKey: "ListadeMetas_idLista_de_metas",
    sourceKey: "idMetas"
} );

ListTask.belongsTo(Task, {
    foreingKey: 'ListadeMetas_idLista_de_metas',
    sourceKey: 'idLista_de_metas'
});

export default Task;
