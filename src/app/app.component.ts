import { Component } from '@angular/core';
import {IUser, UserRole, UserStatus} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'userManagmentent';
  users: IUser[] = [
    {
      fullName: 'John Doe',
      role: 'user',
      status: 'active',
    }
  ]

  newUser(user: IUser) {
    this.users.push(user);
    // console.log('new user added:', user)
  }

  changeStatus(status: UserStatus, index: number) {
    console.log('user status changed:', status, index);
    this.users[index].status = status;
  }
  changeRole(role: UserRole, index: number) {
    console.log('user role changed:', role, index);
    this.users[index].role = role;
  }
}
