import { Request, Response } from 'express';
import Recipe from './../models/recipeModel';

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    // BUILD QUERY
    // 1) Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 2) Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query: any = Recipe.find(JSON.parse(queryStr));

    // 3) Sorting
    const sort = req.query.sort as string;
    if (sort) {
      const sortBy = sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // 4) Field limiting
    const fields = req.query.fields as string;
    if (fields) {
      const fieldsBy = fields.split(',').join(' ');
      query = query.select(fieldsBy);
    } else {
      query = query.select('-__v');
    }

    const recipes = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: recipes.length,
      data: {
        recipes,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export const getRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: recipe,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
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
      message: err,
    });
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        recipe,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);

    return res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }

  res.status(200).json({ status: 'success', message: 'Delete Recipe' });
};
