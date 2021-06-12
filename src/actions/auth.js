import * as api from "../api";
import { AUTH } from "../constants/types";
import { getCurrentUser } from "./user";

export const signIn = (authData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(authData);
    dispatch({ type: AUTH, data });
    history.push("/dashboard/home");
    history.go(0);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (authData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: AUTH, data });
    history.push("/sign-in");
    history.go(0);
  } catch (error) {
    console.log(error);
  }
};
