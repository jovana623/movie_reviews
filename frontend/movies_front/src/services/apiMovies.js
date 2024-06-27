import axios from "axios";

export async function getMovies() {
  const response = await axios.get("http://localhost:8000/api/movies/");
  return response.data;
}

export async function getMovieById(movieId) {
  const response = await axios.get(
    `http://localhost:8000/api/movies/${movieId}`
  );
  return response.data;
}
