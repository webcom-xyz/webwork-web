import API from "../api";

export const requestAddMembers = ({ membersData }) => {
  API.post("/workspace/members", membersData);
};

export const requestGetMembers = () => {
  return API.get(`/workspace/members`);
};

export const requestRemoveMember = ({ memberData }) => {
  API.delete(`/workspace/members`, memberData);
}

