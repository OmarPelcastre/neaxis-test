import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesViewComponent } from './components/employees-view/employees-view.component';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'empleados', component: EmployeesViewComponent},
  {path: 'grupos', component: GroupsViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
