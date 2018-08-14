import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../shared/login.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private loginservice:LoginService, private _router:Router) { }

  ngOnInit() {
    //console.log("RoleID:"+localStorage.getItem("loggedUserRole"));
  this.loginservice.getMenuDetails(localStorage.getItem("loggedUserRole"));
}
logOut(){
  this._router.navigate(['/login']);
  localStorage.clear();
}
}
