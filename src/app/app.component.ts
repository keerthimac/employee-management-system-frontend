import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmployeeComponent } from './page/manage-employee/manage-employee.component';
import { AddEmployeeComponent } from './page/add-employee/add-employee.component';
import { ViewAllEmployeesComponent } from './page/view-all-employees/view-all-employees.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ManageEmployeeComponent,
    AddEmployeeComponent,
    ViewAllEmployeesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'employee_management_system_frontend';
}
