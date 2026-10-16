const express = require('express');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Secure MERN API',
    module: 'INSY7314',
    resource: '/api/movies'
  });
});

module.exports = router;