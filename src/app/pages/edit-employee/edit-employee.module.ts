import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { EditEmployeeRoutingModule } from './edit-employee-routing.module';
import { EditEmployeeComponent } from './component/edit-employee.component';

@NgModule({
  declarations: [EditEmployeeComponent],
  imports: [
    CommonModule,
    EditEmployeeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditEmployeeModule {}
