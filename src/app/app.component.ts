import { Component } from '@angular/core';
import { StudentAuthService } from './services/student-auth/student-auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private StudentAuthService:StudentAuthService) {}
  ngOnInit(): void {
    this.StudentAuthService.autoLogin();

  }

}
