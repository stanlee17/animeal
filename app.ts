import express, { Express } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import recipeRouter from './routes/recipeRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/recipes', recipeRouter);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
