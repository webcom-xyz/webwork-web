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

 export default API;