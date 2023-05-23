import { LocalStorageService } from '../../services/local-storage.service';
import { User } from './../../Models/user.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: User;
  student_id: string;
  student = JSON.parse(this.LocalStorageService.get('student'));
  paramsSubscription: Subscription;
  constructor(private LocalStorageService:LocalStorageService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.student_id = this.route.snapshot.params['student_id'];
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.student_id = params['student_id'];
        this.user = this.student.student;
      }
    );
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }



}
