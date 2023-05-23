import { StudentAuthService } from './../../../services/student-auth/student-auth.service';
import { NgForm } from '@angular/forms';
import { Component ,Input, ViewChild} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/user.model';
import { StudentService } from 'src/app/services/student.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  @ViewChild('f') EditForm: NgForm;
  user: User;
  paramsSubscription: Subscription;
  student_id: string;
  student = JSON.parse(this.LocalStorageService.get('student'));

  constructor(private StudentAuthService:StudentAuthService,private route:ActivatedRoute,private StudentService:StudentService, private LocalStorageService:LocalStorageService){}
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
      name: this.EditForm.value.name,
      address:this.EditForm.value.address,
      phone: this.EditForm.value.phone,
      nationalId: this.EditForm.value.nationalId,
      photo: this.EditForm.value.photo,
      gender: this.EditForm.value.gender,
      governorate :this.EditForm.value.governorate,
      city : this.EditForm.value.city,
    }

    console.log(userData);
    this.onUpdateStudent(userData);
    this.StudentAuthService.logout();
    this.EditForm.reset();
  }

  onUpdateStudent(userData:any) {
    this.StudentService.UpdateStudent(userData, this.user.id).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      console.log(error);
    });
;

  }

}
