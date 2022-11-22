import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {IUser} from "../../interfaces";
import {UserRole} from "../../interfaces";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewUserComponent{
 @Output() addUser: EventEmitter<IUser> = new EventEmitter<IUser>();
  constructor() { }


  addUserHandler(fullName: string, role: string){
    if(!fullName || !role) return alert('Please fill all fields');
    this.addUser.emit({
      fullName: fullName,
      role: role as UserRole,
      status: 'inactive'
    });
// console.log('new user added', fullName, role);


}
}
