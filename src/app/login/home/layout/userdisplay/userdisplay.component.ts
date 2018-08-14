import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../shared/login.service';
@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

  ngOnInit() {
    this.loginservice.getUserDetail(localStorage.getItem("loggedUserName"),localStorage.getItem("loggedUserRoleName"));
  }

}
