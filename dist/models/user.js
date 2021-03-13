import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnectio';
const User = sequelize.define('user', {
  idUsuario: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  usuario: {
    type: Sequelize.TEXT
  },
  contrasena: {
    type: Sequelize.TEXT
  },
  perfil_idPerfil: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});
export default User;