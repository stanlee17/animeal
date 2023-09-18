import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'AniMeal' });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
