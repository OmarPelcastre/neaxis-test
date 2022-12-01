import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit, AfterViewInit {

  employees: Employee[] = [];
  constructor(private employeesService: EmployeesService) { 

  }

  displayedColumns: string[] = ['id', 'name', 'last_name', 'birthday'];
  dataSource = new MatTableDataSource<Employee>(this.employees);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(){
    this.employeesService.getAllEmployees().subscribe(
      (response) => {
        console.info(response)
        this.employees = response.data.employees
        console.log(this.employees)
        this.dataSource = new MatTableDataSource<Employee>(this.employees);
        this.dataSource.paginator = this.paginator;

      }
    )
  }

}
