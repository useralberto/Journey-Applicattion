import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnection.js';

import Profile from './profile.js'; 

const User = sequelize.define('Usuario', {
    idUsuario:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Usuario: {
        type: Sequelize.STRING
    },
    Contrasena:{
        type: Sequelize.STRING
    },
    Perfil_idPerfil:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

User.belongsTo(Profile, {
    foreingKey: 'Perfil_idPerfil',
    sourceKey: 'id'
});

export default User;
