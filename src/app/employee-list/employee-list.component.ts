import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] =[

    new Employee(1,"jam",10000,"Developer",6),
    new Employee(2,"Din",4000,"Tester",5),
    new Employee(3,"lim",14300,"ScrumMaster",7),
    new Employee(5,"pam",15300,"Lead",8)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
