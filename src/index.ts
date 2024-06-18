// src/server.ts

import express, { Request, Response } from 'express';
import User from './models/User';
import sequelize from './models';

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
