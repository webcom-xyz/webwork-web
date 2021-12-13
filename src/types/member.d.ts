export interface IMember {
  id: string;
  fullName: string;
  avatarUrl: string;
  createDate: string;
  email: string;
  office: string;
}

export type WorkspaceMembersDTO = {
  data: IMember[];
  details: {
    message: string;
  };
};

export interface IAssignedEmployee {
  email: string | undefined;
  role: string | undefined;
}

export type AssignedEmployeesDTO = {
  data: IAssignedEmployee[];
  details: {
    message: string;
  };
};
