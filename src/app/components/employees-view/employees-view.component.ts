import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'employees-view',
  templateUrl: './employees-view.component.html',
  styleUrls: ['./employees-view.component.css']
})
export class EmployeesViewComponent implements OnInit {

  search: string = "";
  searchInTable: string = "";
  constructor(
    public dialog: MatDialog,
    ) { }

  showNewEmployeeModal(): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result == 'success'){
        this.searchInTable = " "
        this.searchInTable = ""
      }
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }

  searchEmployee(){
    this.searchInTable = this.search

  }

  clearSearch(){
    this.search = "";
    this.searchInTable = ""
  }

}
