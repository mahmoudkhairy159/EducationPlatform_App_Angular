import { StudentAuthService } from './../../../services/student-auth/student-auth.service';
import { StudentService } from '../../../services/student.service';
import { User } from './../../../Models/user.model';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  @ViewChild('f') ChangePasswordForm: NgForm;
  user: User;
  paramsSubscription: Subscription;
  student_id: string;
  student = JSON.parse(this.LocalStorageService.get('student'));

  constructor(private route: ActivatedRoute,  private StudentAuthService:StudentAuthService,private StudentService:StudentService,private LocalStorageService: LocalStorageService
  ) { }
  ngOnInit(): void {
    this.student_id = this.route.snapshot.params['student_id'];
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        if (this.student) {
          this.student_id = params['student_id'];
          this.user = this.student.student;
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onSubmit() {
    let userData: any = {
      currentPassword: this.ChangePasswordForm.value.currentPassword,
      newPassword: this.ChangePasswordForm.value.newPassword,
      renewPassword:this.ChangePasswordForm.value.renewPassword,

    }
    console.log(userData);
    this.onChangePassword(userData);
    this.StudentAuthService.logout();
    this.ChangePasswordForm.reset();
  }
  onChangePassword(userData: any) {
    this.StudentService.changePassword(userData, this.user.id).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      console.log(error);
    });
  }
}
