require('dotenv').config();
const express = require('express');

const corsMiddleware = require('./middleware/corsMiddleware');
const errorHandler = require('./middleware/errorHandler');

const rootRoutes = require('./routes/rootRoutes');
const healthRoutes = require('./routes/healthRoutes');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Parse incoming JSON request bodies
app.use(express.json());

// Controlled CORS configuration
app.use(corsMiddleware);

// Routes
app.use('/', rootRoutes);
app.use('/health', healthRoutes);
app.use('/api/movies', movieRoutes);

// 404 handler for unknown routes
app.use((req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`);
  error.status = 404;
  next(error);
});

// Central error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});