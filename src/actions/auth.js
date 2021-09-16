import {
  SIGN_UP,
  SET_TOKEN,
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_WITH_GOOGLE,
} from "../constants/types";

export const signUp = (authData, history) => ({
  type: SIGN_UP,
  payload: { authData, history },
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: { token },
});

export const signIn = (authData, history) => ({
  type: SIGN_IN,
  payload: { authData, history },
});

export const signOut = (history) => ({
  type: SIGN_OUT,
  payload: { history },
});
