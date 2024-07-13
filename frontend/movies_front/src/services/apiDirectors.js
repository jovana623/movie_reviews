import axios from "axios";

export async function getDirectors() {
  const response = await axios.get("http://127.0.0.1:8000/api/directors/");
  return response.data;
}

export async function getDirector(directorId) {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/directors/${directorId}`
  );
  return response.data;
}

export async function createDirector(direcorData) {
  const url = "http://127.0.0.1:8000/api/directors/";
  const response = await axios.post(url, direcorData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
