import { Request, Response } from 'express';

export const getAllRecipes = (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Get All Recipe' });
};

export const getRecipe = (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Get Single Recipe' });
};

export const createRecipe = (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json({ status: 'success', message: 'Create Recipe' });
};

export const updateRecipe = (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Update Recipe' });
};

export const deleteRecipe = (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Delete Recipe' });
};
