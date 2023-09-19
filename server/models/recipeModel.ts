import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A recipe must have a name'],
    unique: true,
  },
  series: {
    type: String,
    required: [true, 'A recipe must have an anime series source'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  duration: {
    type: Number,
    required: [true, 'A recipe must have a time duration (mins)'],
  },
  difficulty: {
    type: String,
    required: [true, 'A recipe must have a difficulty'],
  },
  description: {
    type: String,
    required: [true, 'A recipe must have a description'],
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
