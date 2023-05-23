import { StudentAuthService } from './../../services/student-auth/student-auth.service';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.css']
})
export class StudentRegisterFormComponent {
  @ViewChild('f') registerForm: NgForm;
  error = null;
  user:User;




  constructor(private router:Router,private StudentAuthService:StudentAuthService) { }
  onSubmit() {
    this.user.name = this.registerForm.value.name;
    this.user.email = this.registerForm.value.email;
    this.user.address = this.registerForm.value.address;
    this.user.phone = this.registerForm.value.phone;
    this.user.password = this.registerForm.value.password;
    this.user.password_confirmation = this.registerForm.value.password_confirmation
    this.onCreateStudent(this.user);
    this.registerForm.reset();
    this.router.navigate(['student/login']);
  }


  onCreateStudent( user:User) {
    this.StudentAuthService.storeStudent(user);
   }


}
