import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
});

export const fetchUser = async (id) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export default api;
