import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'
import {
  DB as DBConfig
} from '../config'

export let tmpdata = sequelize.define('Data', {
  ID: {
    type: Sequelize.BIGINT(20).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true,
  tableName: DBConfig.prefix + 'data',
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_520_ci'
})
