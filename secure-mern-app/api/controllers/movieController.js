const movies = require('../data/movies');

// GET /api/movies
exports.getAllMovies = (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      count: movies.length,
      data: movies
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/movies/:id
exports.getMovieById = (req, res, next) => {
  try {
    const movie = movies.find((item) => item.id === req.params.id);

    if (!movie) {
      const error = new Error(`Movie with id ${req.params.id} not found`);
      error.status = 404;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: movie
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/movies
exports.createMovie = (req, res, next) => {
  try {
    const { title, director, year, genre, rating } = req.body;

    const newId = `m${movies.length + 1}`;

    const newMovie = {
      id: newId,
      title: title.trim(),
      director: director.trim(),
      year,
      genre: genre.trim(),
      rating
    };

    movies.push(newMovie);

    res.status(201).json({
      success: true,
      message: 'Movie created successfully',
      data: newMovie
    });
  } catch (error) {
    next(error);
  }
};