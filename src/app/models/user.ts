export interface User {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  isadmin: boolean;
}

export const UserModel: User = {
  id: null,
  firstName: null,
  lastName: null,
  userName: null,
  email: null,
  password: null,
  isadmin: false,
}

