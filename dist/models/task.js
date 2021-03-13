import Sequelize from "sequelize";
import { sequelize } from '../database/dbConnection';
const Task = sequelize.define('task', {
  idMetas: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.TEXT
  },
  descripcion: {
    type: Sequelize.TEXT
  },
  progreso: {
    type: Sequelize.INTEGER
  },
  estado: {
    type: Sequelize.TEXT
  },
  listadodeMetas_idLista_de_metas: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});
export default Task;