// config/database.js

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Gyan_Prabha_Foundation', 'root', '0805', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
