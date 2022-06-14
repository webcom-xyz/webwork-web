import { call, put } from "redux-saga/effects";
import { setMembers } from "../actions/workspace";
import { requestAddMembers, requestGetMembers, requestRemoveEmployee, requestRemoveMember } from "../requests/workspace";

export function* handleAddMembers(action) {
  try {
    yield call(requestAddMembers, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleRemoveMember(action) {
  try {
    yield call(requestRemoveMember, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleRemoveEmployee(action) {
  try {
    yield call(requestRemoveEmployee, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetMembers(action) {
  try {
    const { data } = yield call(requestGetMembers, action.payload);
    yield put(setMembers(data));
  } catch (error) {
    console.log(error);
  }
}

