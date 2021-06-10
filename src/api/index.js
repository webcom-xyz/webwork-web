import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("x-auth-token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem(
      "x-auth-token"
    )}`;
  }
  return req;
});

// Authentication
export const signIn = (authData) =>
  API.post("authentication/local/sign-in", authData);
export const signUp = (authData) =>
  API.post("authentication/local/sign-up", authData);

// User
export const getCurrentUser = () => API.get("user");
