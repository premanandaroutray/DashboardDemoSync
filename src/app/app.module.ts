import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import{Routes,RouterModule} from '@angular/router';
import { AmChartsModule} from "@amcharts/amcharts3-angular";
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserdetailComponent } from './userdetails/userdetail/userdetail.component';
import { UserdetailListComponent } from './userdetails/userdetail-list/userdetail-list.component';
import {ToastrModule} from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { LayoutComponent } from './login/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { DailytaskReportComponent } from './home/dailytask-report/dailytask-report.component';
import { MenuComponent } from './login/layout/menu/menu.component';
import { DrilldownChartComponent } from './home/drilldown-chart/drilldown-chart.component';
import { DrilldownBarComponent } from './home/drilldown-bar/drilldown-bar.component';
import { MonthlyTaskComponent } from './home/monthly-task/monthly-task.component';
import { UserdisplayComponent } from './login/layout/userdisplay/userdisplay.component';
import { LogarithimChartComponent } from './home/logarithim-chart/logarithim-chart.component';
import { forEach } from '@angular/router/src/utils/collection';
import { ProjectInfoComponent } from './home/project-info/project-info.component';

const ROUTES:Routes=
[

  // {path:'layout',component:LayoutComponent},
   //{path:'userdetails',component:UserdetailsComponent},
  // {

  //   path:'home',component:HomeComponent,
  //   children:[{path:'',component:LayoutComponent}]
  // },
  // {
  //   path:'userdetails',component:UserdetailsComponent,
  //   children:[{path:'',component:LayoutComponent}]
  // },

  { path: 'layout', component: LayoutComponent,children:
  [
    {
    path:'home',component:HomeComponent
    },
    {
      path:'userdetails',component:UserdetailsComponent
    },
    
    
]},

  { path: 'login', component: LoginComponent },
  

  
=======
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
>>>>>>> b016aeea29a81c346fa055f056e0decf2ffd07a1
  { path: '',redirectTo:'/login', pathMatch: 'full' }

]

@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    UserdetailComponent,
    UserdetailListComponent,
    LoginComponent,
    LayoutComponent,
<<<<<<< HEAD
    HomeComponent,
    DailytaskReportComponent,
    MenuComponent,
    DrilldownChartComponent,
    DrilldownBarComponent,
    MonthlyTaskComponent,
    UserdisplayComponent,
    LogarithimChartComponent,
    ProjectInfoComponent
=======
    TaskdetailsComponent,
    TaskdetailComponent,
    TaskdetailListComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    RolesComponent,
    RoleComponent,
    RoleListComponent
>>>>>>> b016aeea29a81c346fa055f056e0decf2ffd07a1
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AmChartsModule,
    RouterModule.forRoot(ROUTES) , 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
