// src/models/index.ts

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('database_development', 'alejandrotoledo', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
