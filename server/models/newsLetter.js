import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Newsletter = sequelize.define('Newsletter', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  datetime: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  }
}, {
  timestamps: true, 
});

export default Newsletter;
