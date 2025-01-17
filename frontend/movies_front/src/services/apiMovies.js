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

export async function createMovie(movieData) {
  const url = "http://127.0.0.1:8000/api/movies/create/";
  const response = await axios.post(url, movieData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function deleteMovie(movieId) {
  const url = `http://127.0.0.1:8000/api/movies/${movieId}`;
  const response = await axios.delete(url);
  return response.data;
}

export async function updateMovie(movieId, updatedData) {
  const url = `http://127.0.0.1:8000/api/movies/${movieId}`;
  const response = await axios.patch(url, updatedData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
