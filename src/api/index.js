import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/" });
//const API = axios.create({ baseURL: "http://gentle-fish-78.loca.lt/" });


API.interceptors.request.use((req) => {
  if (localStorage.getItem("x-auth-token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem(
      "x-auth-token"
    )}`;
  }
  return req;
});

 export default API;