import axios from "axios";

export const axios_instance = axios.create({
  baseURL: "/api",
});
