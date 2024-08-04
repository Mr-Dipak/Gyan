import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import mysql2 from 'mysql2'; // Import mysql2

// Load environment variables from .env file
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectModule: mysql2, // Explicitly provide the mysql2 module
  port: process.env.DB_PORT,
  logging: false, // Optional: Set to `console.log` if you want to see SQL queries in the console
});

export default sequelize;
