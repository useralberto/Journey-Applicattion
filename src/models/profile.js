import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnection.js';

const Profile = sequelize.define('Perfil', {
    idPerfil:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING
    },
    Apellido:{
        type: Sequelize.STRING
    },
    Correo_electronico:{
        type: Sequelize.STRING
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

export default Profile;
