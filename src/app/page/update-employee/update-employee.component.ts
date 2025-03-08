import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
} from '@angular/core';
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

  @Input() employee: any;
  @Output() updateEvent = new EventEmitter<boolean>();
  updateEmployee() {
    this.http
      .put('http://localhost:8080/employee/update', this.employee)
      .subscribe((data) => {
        console.log(data);
        this.updateEvent.emit(true);
      });
  }
}
