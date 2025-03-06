import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-employees.component.html',
  styleUrl: './view-all-employees.component.css',
})
export class ViewAllEmployeesComponent {
  constructor(private http: HttpClient) {
    this.loadTable();
  }

  public employeeList: any;

  loadTable() {
    this.http.get('http://localhost:8080/employee/get-all').subscribe((rsp) => {
      this.employeeList = rsp;
    });
  }
}
