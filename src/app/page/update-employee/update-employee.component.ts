import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
@Injectable({ providedIn: 'root' })
export class UpdateEmployeeComponent {
  constructor(private http: HttpClient) {}
  public employee = {
    firstName: '',
    lastName: '',
    email: '',
    roleId: '',
    departmentId: '',
  };

  public firstName: string = '';

  updateEmployee() {
    this.http
      .post('http://localhost:8080/employee/add', this.employee)
      .subscribe((data) => {});
  }
}
