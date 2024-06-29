import axios from "axios";

export async function getGenres() {
  const response = await axios.get("http://127.0.0.1:8000/api/genres/");
  return response.data;
}

export async function getGenre(id) {
  const response = await axios.get(`http://127.0.0.1:8000/api/genres/${id}`);
  return response.data;
}
