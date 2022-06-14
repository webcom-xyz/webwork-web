export interface IUser {
  id: string;
  email: string;
  isVerifiedEmail: boolean;
  fullName: string;
  office: string;
  avatarUrl: string;
  createDate: string;
  role: string;
  isDisabled: boolean;
  isPaid: boolean;
}
export type CurrentUserDTO = {
  data: IUser;
  details: {
    message: string;
  };
};
