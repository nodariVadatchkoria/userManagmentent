import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent, UserItemComponent, ButtonComponent} from "./components";
import { RolePermissionDirective } from './directives/role-permission.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { DropdownItemComponent } from './components/dropdown-menu/dropdown-item/dropdown-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserItemComponent,
    UserItemComponent,
    ButtonComponent,
    RolePermissionDirective,
    DropdownDirective,
    DropdownMenuComponent,
    DropdownItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
