import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-groups-view',
  templateUrl: './groups-view.component.html',
  styleUrls: ['./groups-view.component.css']
})
export class GroupsViewComponent implements OnInit {

  groups: any[]
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups()
  }

  getGroups(){
    this.groupService.getGroups().subscribe(
      response => {
        console.log(response);
        if(response.data.groups)
          this.groups = response.data.groups
      }
    )
  }

}
