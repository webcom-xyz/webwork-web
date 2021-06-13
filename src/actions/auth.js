import { SIGN_UP, SET_TOKEN, SIGN_IN, SIGN_OUT } from "../constants/types";

export const signUp = (authData) => ({
  type: SIGN_UP,
  authData
})

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})

export const signIn = (authData) => ({
  type: SIGN_IN,
  authData
})

export const signOut = () => ({
  type: SIGN_OUT
})