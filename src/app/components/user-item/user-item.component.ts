import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser, UserRole, UserStatus} from "../../interfaces";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent  {
  @Input() user?: IUser;
  @Output() statusChanged: EventEmitter<UserStatus> = new EventEmitter<UserStatus>();
  @Output() rolChanged: EventEmitter<UserRole> = new EventEmitter<UserRole>();


  changeStatus(status: UserStatus) {
    this.statusChanged.emit(status);

  }

  changeRole(role: UserRole) {
    this.rolChanged.emit(role);

  }
}

