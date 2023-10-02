import axios from "axios";

export const fetchApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": ["application/json", "multipart/form-data"],
  },
});
