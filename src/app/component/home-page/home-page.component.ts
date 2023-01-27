import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/service/data-service.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home-page',
  template: '<app-add-employee [employeeData]="employee"></app-add-employee>',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public employeeCount: number = 0; 
  public employeeDetails: Employee[] = [];

  constructor(private httpService: HttpService,
              private router: Router,
              private dataService: DataService
              ) { }

  ngOnInit(): void {
    this.httpService.getEmployeedata().subscribe(data => {
      this.employeeDetails = data.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
  }

  remove(empId: number): void {
    console.log(empId)
    this.httpService.deleteEmployeedata(empId).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }

  update(employee: Employee): void {
    this.dataService.changeEmployee(employee);
    this.router.navigateByUrl('/add-employee/' + employee.empId);
    this.httpService.updateEmployeedata(employee.empId, employee).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }

}
