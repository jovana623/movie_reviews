import axios from "axios";

export async function getDirectors() {
  const response = await axios.get("http://127.0.0.1:8000/api/directors/");
  return response.data;
}
