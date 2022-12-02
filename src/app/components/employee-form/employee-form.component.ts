import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { EmployeesViewComponent } from '../employees-view/employees-view.component';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  emtyEmployee: Employee = {
    name: "",
    last_name: "",
  }
  employee = this.emtyEmployee;
  constructor(
    public dialogRef: MatDialogRef<EmployeesViewComponent>,
    private employeeService: EmployeesService
  ) { }

  ngOnInit(): void {
  }

  createEmployee(){
    console.log(this.employee)
    if(this.employee.name != '' && this.employee.birthday && this.employee.last_name != ''){
      this.employeeService.createEmployee(this.employee).subscribe(
        response => {
          console.log(response)
          this.employee = this.emtyEmployee
          this.dialogRef.close("success");
        }
      )
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
