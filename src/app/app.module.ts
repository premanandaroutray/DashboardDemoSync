import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import{Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdetailComponent } from './userdetails/userdetail/userdetail.component';
import { UserdetailListComponent } from './userdetails/userdetail-list/userdetail-list.component';
import {ToastrModule} from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TaskdetailComponent } from './taskdetails/taskdetail/taskdetail.component';
import { TaskdetailListComponent } from './taskdetails/taskdetail-list/taskdetail-list.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RolesComponent } from './roles/roles.component';
import { RoleComponent } from './roles/role/role.component';
import { RoleListComponent } from './roles/role-list/role-list.component';

const ROUTES:Routes=
[
  //{path:'',component:LayoutComponent},
  {path: 'login', component: LoginComponent },
  {path:'UserDetails',component:UserdetailsComponent},
  {path:'TaskDetails',component:TaskdetailsComponent},
  {path:'Projects',component:TaskdetailsComponent},
  {path:'Users',component:UsersComponent},
  {path:'Roles',component:RolesComponent},
 // {path:'contact',component:ContactComponent},
  { path: '',redirectTo:'/login', pathMatch: 'full' }
 // { path: '**', component: PageNotComponent }  
]

@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    UserdetailComponent,
    UserdetailListComponent,
    LoginComponent,
    LayoutComponent,
    TaskdetailsComponent,
    TaskdetailComponent,
    TaskdetailListComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    RolesComponent,
    RoleComponent,
    RoleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) , 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
