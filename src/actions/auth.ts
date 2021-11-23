import { SIGN_UP, SET_TOKEN, SIGN_IN, SIGN_OUT } from "../constants/types";

interface RegisterDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginDTO {
  email: string;
  password: string;
}

export const signUp = (authData: RegisterDTO, history: any) => ({
  type: SIGN_UP,
  payload: { authData, history },
});

export const setToken = (token: string) => ({
  type: SET_TOKEN,
  payload: { token },
});

export const signIn = (authData: LoginDTO, history: any) => ({
  type: SIGN_IN,
  payload: { authData, history },
});

export const signOut = (history: any) => ({
  type: SIGN_OUT,
  payload: { history },
});
