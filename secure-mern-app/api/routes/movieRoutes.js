const express = require('express');
const router = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie
} = require('../controllers/movieController');

const validateMovie = require('../middleware/validateMovie');

// GET /api/movies
router.get('/', getAllMovies);

// GET /api/movies/:id
router.get('/:id', getMovieById);

// POST /api/movies
router.post('/', validateMovie, createMovie);

module.exports = router;