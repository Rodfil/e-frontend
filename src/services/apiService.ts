
import axios from "axios";
import apiConfig from "../configuration/api";

const api = axios.create({
  baseURL: apiConfig.apiUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
