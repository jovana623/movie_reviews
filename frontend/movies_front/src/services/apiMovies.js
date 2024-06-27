import axios from "axios";

export async function getMovies(genreId = null) {
  let url = "http://localhost:8000/api/movies/";
  if (genreId) {
    url += `?genre_id=${genreId}`;
  }
  const response = await axios.get(url);
  return response.data;
}

export async function getMovieById(movieId) {
  const response = await axios.get(
    `http://localhost:8000/api/movies/${movieId}`
  );
  return response.data;
}
