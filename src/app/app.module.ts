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
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe'; 
 


import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './login/home/layout/layout.component';
import { HomeComponent } from './login/home/home.component';
import { DailytaskReportComponent } from './login/home/dailytask-report/dailytask-report.component';
import { MenuComponent } from './login/home/layout/menu/menu.component';
import { DrilldownChartComponent } from './login/home/drilldown-chart/drilldown-chart.component';
import { DrilldownBarComponent } from './login/home/drilldown-bar/drilldown-bar.component';
import { MonthlyTaskComponent } from './login/home/monthly-task/monthly-task.component';
import { UserdisplayComponent } from './login/home/layout/userdisplay/userdisplay.component';
import { LogarithimChartComponent } from './login/home/logarithim-chart/logarithim-chart.component';
import { forEach } from '@angular/router/src/utils/collection';
import { ProjectInfoComponent } from './login/home/project-info/project-info.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { TaskdetailComponent } from './taskdetails/taskdetail/taskdetail.component';
import { TaskdetailListComponent } from './taskdetails/taskdetail-list/taskdetail-list.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RolesComponent } from './roles/roles.component';
import { RoleComponent } from './roles/role/role.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import {ProjectdetailsComponent} from './projectdetails/projectdetails.component';
import {ProjectdetailListComponent} from './projectdetails/projectdetail-list/projectdetail-list.component';
import {ProjectdetailComponent} from './projectdetails/projectdetail/projectdetail.component';
import { APP_INITIALIZER } from '@angular/core';
import{AppConfig} from './app.config';

// export function initConfig(config: AppConfig) {
//   return () => config.load();
// }
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
   {path: 'login', component: LoginComponent },
  // {path:'layout',component:LayoutComponent},
  { path: 'layout', component: LayoutComponent,children:
  [
    {
    path:'home',component:HomeComponent
    },
    {
      path:'userdetails',component:UserdetailsComponent
    },

    {path:'taskDetails',component:TaskdetailsComponent},
    {path:'projects',component:ProjectdetailsComponent},
       {path:'users',component:UsersComponent},
     {path:'roles',component:RolesComponent},


]
},
{ path: '',redirectTo:'/login', pathMatch: 'full' }

]





//import { LayoutComponent } from './layout/layout.component';


// const ROUTES:Routes=
// [
//   //{path:'',component:LayoutComponent},
//   {path: 'login', component: LoginComponent },
//   {path:'UserDetails',component:UserdetailsComponent},
//   {path:'TaskDetails',component:TaskdetailsComponent},
//   {path:'Projects',component:TaskdetailsComponent},
//   {path:'Users',component:UsersComponent},
//   {path:'Roles',component:RolesComponent},
//  // {path:'contact',component:ContactComponent},
//   { path: '',redirectTo:'/login', pathMatch: 'full' }

// ]

@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    UserdetailComponent,
    UserdetailListComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    DailytaskReportComponent,
    MenuComponent,
    DrilldownChartComponent,
    DrilldownBarComponent,
    MonthlyTaskComponent,
    UserdisplayComponent,
    LogarithimChartComponent,
    ProjectInfoComponent,
    TaskdetailsComponent,
    TaskdetailComponent,
    TaskdetailListComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    RolesComponent,
    RoleComponent,
    RoleListComponent,
    ProjectdetailsComponent,
    ProjectdetailListComponent,
    ProjectdetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AmChartsModule,
    RouterModule.forRoot(ROUTES) ,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule

  ],
  providers: [AppConfig,
    {
    provide: APP_INITIALIZER,
    useFactory: (config: AppConfig) => () => config.load(),
    deps: [AppConfig],
    multi: true
    }
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
