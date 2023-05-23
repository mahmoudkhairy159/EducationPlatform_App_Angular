import { LocalStorageService } from '../../../services/local-storage.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/user.model';


@Component({
  selector: 'app-profile-over-view',
  templateUrl: './profile-over-view.component.html',
  styleUrls: ['./profile-over-view.component.css']
})
export class ProfileOverViewComponent {
  user: User;
  paramsSubscription: Subscription;
  student_id: string;
  student = JSON.parse(this.LocalStorageService.get('student'));

  constructor(private route:ActivatedRoute, private LocalStorageService:LocalStorageService){}
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


}
