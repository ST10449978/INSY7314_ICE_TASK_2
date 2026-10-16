# INSY7314 ICE Task 2 - Structured Backend API

This is the structured backend API for INSY7314 ICE Task 2. It uses Express to serve a sample "movies" resource.

## How to Run the Server
1. Navigate to the `api` folder.
2. Run `npm install`
3. Run `npm start`
Server runs on `http://localhost:4000`

## Routes / Endpoints Tested on Postman

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `http://localhost:4000` | Root route |
| GET | `http://localhost:4000/health` | Health check route |
| GET | `http://localhost:4000/api/movies` | Fetch all movies |
| GET | `http://localhost:4000/api/movies/m1` | Fetch a specific movie by its ID |
| POST | `http://localhost:4000/api/movies` | Add a new movie (See sample bodies below) |

## Sample Request Bodies for POST `/api/movies`

Use `Content-Type: application/json` for these requests. Adding five new movies to the temporary in-memory:

### Movie 1
```json
{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "year": 2014,
  "genre": "Sci-Fi",
  "rating": 8.7
}


{
  "title": "The Matrix",
  "director": "Lana Wachowski",
  "year": 1999,
  "genre": "Sci-Fi",
  "rating": 8.7
}

{
  "title": "Pulp Fiction",
  "director": "Quentin Tarantino",
  "year": 1994,
  "genre": "Crime",
  "rating": 8.9
}

{
  "title": "Forrest Gump",
  "director": "Robert Zemeckis",
  "year": 1994,
  "genre": "Drama",
  "rating": 8.8
}


{
  "title": "Gladiator",
  "director": "Ridley Scott",
  "year": 2000,
  "genre": "Action",
  "rating": 8.5
}


Input Validation Tests
{
  "director": "Christopher Nolan",
  "year": 2014,
  "genre": "Sci-Fi",
  "rating": 8.7
}









