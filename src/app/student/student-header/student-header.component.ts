import { StudentAuthService } from './../../services/student-auth/student-auth.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Student } from 'src/app/Models/student.model';
import { Component } from '@angular/core';
import { Subscription, exhaustMap, take } from 'rxjs';
import { User } from 'src/app/Models/user.model';


@Component({
  selector: 'app-student-header',
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.css']
})
export class StudentHeaderComponent {
  private userSub: Subscription;
  isAuthenticated = false;
  user: User;
  student= JSON.parse(this.LocalStorageService.get('student'));


  constructor(private LocalStorageService:LocalStorageService,private StudentAuthService:StudentAuthService){}
  ngOnInit(): void {
    this.userSub = this.StudentAuthService.student.subscribe(student => {
      this.isAuthenticated = !student ? false : true;
      if (this.isAuthenticated &&this.student) {
        //this.user = student.student;
        //console.log(this.user);
        this.user = this.student.student;
      }
    });


  }
  onLogout() {
    this.StudentAuthService.logout();
  }


ngOnDestroy(): void {
  this.userSub.unsubscribe();
}
}
