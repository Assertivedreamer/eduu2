import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public user:any;
  public showEdit:boolean;
  constructor() {
      this.user={};
      this.showEdit=false;
   }

  ngOnInit(): void {
    this.user = {
      employeeID:1,
      firstName:"Nikhil",
      lastName:"Parakh",
      salary:2000000,
      dob:"30/08/1998",
      email:"nikhil@eyepaste.com"
    }
  }

  public editEmp():void{
    this.showEdit=true;
  }

  public updateEmp():void{
    this.showEdit=false;
  }

}
