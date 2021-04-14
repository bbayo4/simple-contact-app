import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './component/employees.component';
import { EmployeeTableComponent } from '../../components/employee-table/employee-table.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeeTableComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule {}
