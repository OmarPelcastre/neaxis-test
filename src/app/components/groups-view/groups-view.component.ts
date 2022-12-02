import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
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

  employees: any[] = [];
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups()
  }

  getGroups(){
    this.groupService.getGroups().subscribe(
      response => {
        console.log(response);
        if(response.data.groups){
          this.groups = response.data.groups
          this.selected = [this.groups[0]]
          this.getEmployeesByGroup(this.selected[0].id)

          // this.selected.push(this.groups[0])
        }
      }
    )
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(this.groups);
    console.log(this.selected);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.selected = []
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex,
      // );
      this.selected = [this.groups[event.previousIndex]]
      this.getEmployeesByGroup(this.selected[0].id)
    }
  }

  getEmployeesByGroup(id: number){
    this.groupService.getEmployeesByGroup(id).subscribe(
      response => {
        console.log(response);
        this.employees = response.data.employees
      }
    )
  }

}
