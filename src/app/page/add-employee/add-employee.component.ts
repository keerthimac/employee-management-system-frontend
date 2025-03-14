import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, NavComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
@Injectable({ providedIn: 'root' })
export class AddEmployeeComponent {
  constructor(private http: HttpClient) {}
  public employee = {
    firstName: '',
    lastName: '',
    email: '',
    roleId: '',
    departmentId: '',
  };

  public firstName: string = '';

  addEmployee() {
    this.http
      .post('http://localhost:8080/employee/add', this.employee)
      .subscribe((data) => {});
  }
}
