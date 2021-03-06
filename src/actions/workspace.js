import {
  ADD_MEMBER,
  GET_MEMBERS,
  REMOVE_EMPLOYEE,
  REMOVE_MEMBER,
  SET_MEMBERS,
} from "../constants/types";

export const addMembers = (membersData) => ({
  type: ADD_MEMBER,
  payload: { membersData },
});

export const getMembers = () => ({
  type: GET_MEMBERS,
});

export const removeMember = (memberData) => ({
  type: REMOVE_MEMBER,
  payload: { memberData },
});

export const removeEmployee = (employeeData) => ({
  type: REMOVE_EMPLOYEE,
  payload: employeeData,
});

export const setMembers = (membersData) => ({
  type: SET_MEMBERS,
  payload: membersData,
});
