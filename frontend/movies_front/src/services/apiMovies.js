import axios from "axios";

export async function getMovies(genreId = null, year = null) {
  let url = "http://localhost:8000/api/movies/";

  const params = new URLSearchParams();
  if (genreId) {
    params.append("genreId", genreId);
  }
  if (year) {
    params.append("year", year);
  }

  if (params.toString()) {
    url += `?${params.toString()}`;
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
