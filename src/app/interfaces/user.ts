import {UserRole} from "./user-role";
import {UserStatus} from "./user-status";

export interface IUser {
  fullName: string;
  role: UserRole;
  status: UserStatus;
}
