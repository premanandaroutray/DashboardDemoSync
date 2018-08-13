import { Component, OnInit } from '@angular/core';
import{LoginService} from '../shared/login.service';
import{LoginComponent} from '../login.component'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

  ngOnInit() {
  // this.loginservice.getMenuDetails(th.user.RoleID);
  this.loginservice.getUserDetail(localStorage.getItem("loggedUserName"),localStorage.getItem("loggedUserRoleName"));
  }
  
}
