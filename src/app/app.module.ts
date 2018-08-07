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

const ROUTES:Routes=
[
  //{path:'',component:LayoutComponent},
  { path: 'login', component: LoginComponent },
  {path:'UserDetails',component:UserdetailsComponent},
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
    LayoutComponent
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
