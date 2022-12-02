import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeesViewComponent } from './components/employees-view/employees-view.component';
import { HomeComponent } from './components/home/home.component';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';

import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatCarouselModule } from 'ng-mat-carousel';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    EmployeesViewComponent,
    HomeComponent,
    GroupsViewComponent,
    EmployeeFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCarouselModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
