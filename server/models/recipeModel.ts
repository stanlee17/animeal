import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A recipe must have a name'],
    unique: true,
    trim: true,
  },
  series: {
    type: String,
    required: [true, 'A recipe must have an anime series source'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
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
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  imageBackground: {
    type: String,
    required: [true, 'A recipe must have a image background'],
  },
  youtubeUrl: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
