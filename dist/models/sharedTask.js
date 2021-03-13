import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnectio';
const SharedTask = sequelize.define('sharedTask', {
  idListaMetas: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  compartida_con: {
    type: Sequelize.INTEGER
  },
  Usuario_idUsuario: {
    type: Sequelize.INTEGER
  },
  Metas_idMetas: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});
export default SharedTask;