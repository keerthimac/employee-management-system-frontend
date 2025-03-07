import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './page/add-employee/add-employee.component';
import { ViewAllEmployeesComponent } from './page/view-all-employees/view-all-employees.component';

export const routes: Routes = [
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
  },
  {
    path: 'view-all-employees',
    component: ViewAllEmployeesComponent,
  },
];
