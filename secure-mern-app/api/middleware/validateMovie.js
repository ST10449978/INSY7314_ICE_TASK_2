module.exports = (req, res, next) => {
  const { title, director, year, genre, rating } = req.body;
  const errors = [];

  if (!title || typeof title !== 'string' || title.trim() === '') {
    errors.push('title is required and must be a non-empty string');
  }

  if (!director || typeof director !== 'string' || director.trim() === '') {
    errors.push('director is required and must be a non-empty string');
  }

  if (
    year === undefined ||
    !Number.isInteger(year) ||
    year < 1888 ||
    year > new Date().getFullYear() + 5
  ) {
    errors.push('year is required and must be a valid integer');
  }

  if (!genre || typeof genre !== 'string' || genre.trim() === '') {
    errors.push('genre is required and must be a non-empty string');
  }

  if (
    rating === undefined ||
    typeof rating !== 'number' ||
    rating < 0 ||
    rating > 10
  ) {
    errors.push('rating is required and must be a number between 0 and 10');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};