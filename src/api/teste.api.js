import axios from "axios";

const api = axios.create({
  baseURL: "https://6382a6411ada9475c8f10ca8.mockapi.io/",
});

export default api;