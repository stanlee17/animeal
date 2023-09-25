import mongoose, { Types } from 'mongoose';

interface Ingredient {
  name: string;
  quantity?: string;
}

interface Instruction {
  step: number;
  description: string;
}

interface Recipe {
  _id: Types.ObjectId;
  title: string;
  createdAt: Date;
  series: string;
  imageCover: string;
  imageBackground: string;
  cookingTime: number;
  prepTime: number;
  calories: number;
  servings: number;
  cuisine: string;
  tags: [String];
  difficulty: string;
  description: string;
  favourites: number;
  youtubeUrl: string;
  ingredients: [Ingredient];
  instructions: [Instruction];
}

const ingredientSchema = new mongoose.Schema<Ingredient>({
  name: {
    type: String,
    required: [true, 'An ingredient must have a name'],
  },
  quantity: {
    type: String,
    default: null,
  },
});

const instructionSchema = new mongoose.Schema<Instruction>({
  step: Number,
  description: {
    type: String,
    required: [true, 'An instruction must have a description'],
  },
});

const recipeSchema = new mongoose.Schema<Recipe>({
  title: {
    type: String,
    required: [true, 'A recipe must have a title'],
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  series: {
    type: String,
    required: [true, 'A recipe must have an anime series source'],
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  imageBackground: {
    type: String,
    required: [true, 'A recipe must have a image background'],
  },
  cookingTime: {
    type: Number,
    required: [true, 'A recipe must have a cooking time'],
  },
  prepTime: {
    type: Number,
    required: [true, 'A recipe must have a preparation time'],
  },
  calories: {
    type: Number,
    required: [true, 'A recipe must have calories per serving'],
  },
  servings: {
    type: Number,
    required: [true, 'A recipe must have servings number'],
  },
  cuisine: {
    type: String,
    required: [true, 'A recipe must have a cuisine'],
  },
  tags: {
    type: [String],
    required: [true, 'A recipe must have tags'],
  },
  difficulty: {
    type: String,
    required: [true, 'A recipe must have a difficulty'],
  },
  description: {
    type: String,
    required: [true, 'A recipe must have a description'],
    trim: true,
  },
  favourites: {
    type: Number,
    default: 0,
  },
  youtubeUrl: {
    type: String,
    default: null,
  },
  ingredients: {
    type: [ingredientSchema],
    required: [true, 'A recipe must have ingredients'],
  },
  instructions: {
    type: [instructionSchema],
    required: [true, 'A recipe must have instructions'],
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
