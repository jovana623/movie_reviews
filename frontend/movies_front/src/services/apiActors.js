import axios from "axios";

export async function getActors() {
  const response = await axios.get("http://127.0.0.1:8000/api/actors/");
  return response.data;
}

export async function getActor(actorId) {
  const response = await axios.get(
    `http://127.0.0.1:8000/api/actors/${actorId}`
  );

  return response.data;
}

export async function createActor(actorData) {
  const url = "http://127.0.0.1:8000/api/actors/";
  const response = await axios.post(url, actorData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

export async function deleteActor(actorId) {
  const url = `http://127.0.0.1:8000/api/actors/${actorId}`;
  const response = await axios.delete(url);
  return response.data;
}

export async function updateActor(actorId, updatedData) {
  const url = `http://127.0.0.1:8000/api/actors/${actorId}`;
  const response = await axios.patch(url, updatedData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
