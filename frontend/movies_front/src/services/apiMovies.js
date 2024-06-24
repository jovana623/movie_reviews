import axios from "axios";

export async function getMovies() {
  const response = await axios.get("http://localhost:8000/api/movies/");
  return response.data;
}
