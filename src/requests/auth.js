import API from "../api";

export const requestSignUp = (authData) =>
  API.post("authentication/local/sign-up", authData.authData);
  
export const requestSignIn = (authData) => {
  return API.post("authentication/local/sign-in", authData.authData);
};
