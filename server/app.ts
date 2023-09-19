import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

import recipeRouter from './routes/recipeRoutes';
import userRouter from './routes/userRoutes';

const app: Express = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/recipes', recipeRouter);
app.use('/api/v1/users', userRouter);

export default app;
