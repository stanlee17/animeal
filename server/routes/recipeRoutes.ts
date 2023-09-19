import express from 'express';
import {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from './../controllers/recipeController';

const router = express.Router();

router.route('/').get(getAllRecipes).post(createRecipe);

router.route('/:id').get(getRecipe).patch(updateRecipe).delete(deleteRecipe);

export default router;
