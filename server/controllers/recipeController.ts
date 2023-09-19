import { Request, Response } from 'express';
import Recipe from './../models/recipeModel';

export const getAllRecipes = (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Get All Recipe' });
};

export const getRecipe = (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Get Single Recipe' });
};

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newRecipe,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

export const updateRecipe = (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Update Recipe' });
};

export const deleteRecipe = (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'Delete Recipe' });
};
