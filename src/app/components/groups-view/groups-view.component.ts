import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Group } from 'src/app/interfaces/Group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups-view',
  templateUrl: './groups-view.component.html',
  styleUrls: ['./groups-view.component.css']
})
export class GroupsViewComponent implements OnInit {

  groups: Group[] = [];
  selected: Group[];
  selectedEmployees: any[];

  checked: boolean = false;

  @ViewChild("employeeList") list: any;
  employees: any[] = [];
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups()
  }

  getGroups(){
    this.groupService.getGroups().subscribe(
      response => {
        // console.log(response);
        if(response.data.groups){
          this.groups = response.data.groups
          this.selected = [this.groups[0]]
          this.getEmployeesByGroup(this.selected[0].id)
        }
      }
    )
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.selected = []
      this.selected = [this.groups[event.previousIndex]]
      this.getEmployeesByGroup(this.selected[0].id)
    }
  }

  getEmployeesByGroup(id: number){
    this.groupService.getEmployeesByGroup(id).subscribe(
      response => {
        this.checked = false
        if(response.data.employees)
          this.employees = response.data.employees
      }
    )
  }

  checkedChange(){
    if(this.checked){
      // seleccionar todos los empleados
      this.list.options._results.forEach((item: MatListOption) => {
        item.selected = true
      });
    }else{
      // deseleccionar todos los empleados
      this.list.options._results.forEach((item: MatListOption) => {
        item.selected = false
      });
    }
  }

  showAllSelectedEmployees(){
    console.log(this.selectedEmployees);
    
  }

}
