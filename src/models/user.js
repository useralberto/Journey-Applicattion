import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnectio';

import lisTask from './listTask';

const User = sequelize.define('user', {
    idUsuario:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    usuario: {
        type: Sequelize.TEXT
    },
    contrasena:{
        type: Sequelize.TEXT
    },
    idPerfil:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

User.hasMany(lisTask,{
    foreingKey: 'idUsuario',
    sourceKey: 'id'
});

lisTask.belongsTo(User,{
    foreingKey: 'idUsuario',
    sourceKey: 'id'
})

export default User;
