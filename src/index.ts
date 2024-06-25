// src/server.ts

import express, { Request, Response } from 'express';
import { User } from './models/User';
import sequelize from './models';
import { ValidationError } from 'sequelize';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users);
});

app.post('/register', async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    if (error instanceof ValidationError) {
      res.status(400).json({
        errors: error.errors.map((e: any) => e.message),
        values: error.errors.map((e: any) => e.path),
      });
    } else {
      res.status(402).json({ messaga: 'something went wrong!' });
    }
  }
});
app.post('/login', async (req: Request, res: Response) => {
  try {
    const user = await User.findOne(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    if (error instanceof ValidationError) {
      res.status(400).json({
        errors: error.errors.map((e: any) => e.message),
        values: error.errors.map((e: any) => e.path),
      });
    } else {
      res.status(402).json({ messaga: 'something went wrong!' });
    }
  }
});

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
