export interface IUser {
  id?: number;
  lastName?: string;
  firstName?: string;
  email: string;
  password: string;
  phoneNumber?: number;
  enabled?: boolean;
  token?: string;
}
