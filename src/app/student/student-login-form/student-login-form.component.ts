import { StudentAuthService } from './../../services/student-auth/student-auth.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-student-login-form',
  templateUrl: './student-login-form.component.html',
  styleUrls: ['./student-login-form.component.css']
})
export class StudentLoginFormComponent {
  @ViewChild('f') loginForm: NgForm;
  user: {
    email: string,
    password: string
  } = { email: '', password: '' };
  constructor(private StudentAuthService:StudentAuthService) { }



  onSubmit() {
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
    this.onLoginStudent(this.user);
    this.loginForm.reset();
  }


  onLoginStudent(user: {
    email: string,
    password: string
  }) {
    this.StudentAuthService.loginStudent(user);


  }
}
