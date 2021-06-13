import { takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import {
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  SET_TOKEN,
  SIGN_IN,
  SIGN_UP,
  UPDATE_CURRENT_USER_AVATAR,
  SIGN_OUT,
} from "../constants/types";
import {
  handleSignUp,
  handleSignIn,
  handleSetToken,
  handleSignOut,
} from "../handlers/auth";
import {
  handleGetCurrentUser,
  handleSetCurrentUser,
  handleUpdateCurrentUserAvatar,
} from "../handlers/user";

export function* watcherSaga() {
    
  // Authentication
  yield takeLatest(SIGN_UP, handleSignUp);
  yield takeLatest(SIGN_IN, handleSignIn);
  yield takeLatest(SIGN_OUT, handleSignOut);
  yield takeLatest(SET_TOKEN, handleSetToken);

  // User
  yield takeLatest(GET_CURRENT_USER, handleGetCurrentUser);
  yield takeLatest(SET_CURRENT_USER, handleSetCurrentUser);
  yield takeLatest(UPDATE_CURRENT_USER_AVATAR, handleUpdateCurrentUserAvatar);
}
