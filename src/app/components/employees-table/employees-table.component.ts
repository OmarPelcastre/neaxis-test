import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit, AfterViewInit, OnChanges {

  @Input('search') search: string;

  employees: Employee[] = [];
  employeesAux: Employee[] = [];

  displayedColumns: string[] = ['id', 'name', 'last_name', 'birthday'];
  dataSource = new MatTableDataSource<Employee>(this.employees);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private employeesService: EmployeesService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.search != '')
      this.filterEmployees()
    else {
      this.employees = this.employeesAux;
      this.dataSource = new MatTableDataSource<Employee>(this.employees);
      this.dataSource.paginator = this.paginator;
    }
  }

  filterEmployees() {
    this.search = this.search.toLowerCase()
    this.employees = this.employees.filter(employee => {
      return employee.name.toLocaleLowerCase().includes(this.search)
        || employee.last_name.toLocaleLowerCase().includes(this.search)
    })
    this.dataSource = new MatTableDataSource<Employee>(this.employees);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees() {
    this.employeesService.getAllEmployees().subscribe(
      (response) => {
        this.employees = response.data.employees
        this.employeesAux = response.data.employees
        this.dataSource = new MatTableDataSource<Employee>(this.employees);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

}
