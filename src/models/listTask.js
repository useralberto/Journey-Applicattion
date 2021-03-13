import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnectio';


const ListTask = sequelize.define('listTask', {
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

export default ListTask;