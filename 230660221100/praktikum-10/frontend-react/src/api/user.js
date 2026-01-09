import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const getUsers = (token) => {
  return axios.get(`${API_URL}/admin/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
