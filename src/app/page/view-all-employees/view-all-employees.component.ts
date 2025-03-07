import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-view-all-employees',
  standalone: true,
  imports: [CommonModule, NavComponent],
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

  deleteEmp(employee: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.http
            .delete(`http://localhost:8080/employee/delete/${employee.id}`, {
              responseType: 'text',
            })
            .subscribe((rsp) => {
              swalWithBootstrapButtons.fire({
                title: 'Deleted!',
                text: rsp,
                icon: 'success',
              });
              console.log(rsp);
              this.loadTable();
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          });
        }
      });
  }

  editEmp(employee: any) {
    alert(employee.id);
  }
}
