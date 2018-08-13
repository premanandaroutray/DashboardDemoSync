import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/shared/login.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

  ngOnInit() {
   
    this.loginservice.getProjectAndUserDetailsForDashboard(localStorage.getItem("loggedUserRole"));
    this.loginservice.getDashboardTaskByRole(localStorage.getItem("loggedUserRole"));
  
  }
  ngAfterViewInit() 
  {
  
  
  }

}
