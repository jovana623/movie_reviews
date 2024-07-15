import axios from "axios";

export async function getCurrentUser() {
  const token = localStorage.getItem("token");
  const url = "http://127.0.0.1:8000/api/users/current_user/";
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createUser(userData) {
  const url = "http://127.0.0.1:8000/api/users/register/";
  const response = await axios.post(url, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

export async function loginUser(loginData) {
  const url = "http://127.0.0.1:8000/api/users/token/";
  const response = await axios.post(url, loginData);
  return response.data;
}
