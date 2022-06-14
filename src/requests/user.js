import API from "../api";

export const requestGetCurrentUser = () => {
  return API.get("/user");
};

export const requestUpdateCurrentUserAvatar = (formData) =>
  API.put("/user/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });


export const requestUpdateCurrentUser = (userData) => {
  return API.put("/user", userData);
}