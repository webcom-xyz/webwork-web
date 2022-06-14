import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
});

API.interceptors.request.use((req: AxiosRequestConfig) => {
  if (localStorage.getItem("x-auth-token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem(
      "x-auth-token"
    )}`;
  }
  return req;
});

export default API;
