import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeesViewComponent } from './components/employees-view/employees-view.component';

import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    EmployeesViewComponent,
    HomeComponent,
    GroupsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Angular Material
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
