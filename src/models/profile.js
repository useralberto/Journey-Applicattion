import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnectio';

import user from './user';

const Profile = sequelize.define('profile', {
    idPerfil:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.TEXT
    },
    Apellido:{
        type: Sequelize.TEXT
    },
    Correo_electronico:{
        type: Sequelize.INTEGER
    },
    foto_de_perfil:{
        type: Sequelize.TEXT
    },
    Numero_de_telefono:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});

Profile.hasMany(user,{
    foreingKey: 'idPerfil',
    sourceKey: 'id'
});

user.belongsTo(Profile,{
    foreingKey: 'idPerfil',
    sourceKey: 'id'
})

export default Profile;