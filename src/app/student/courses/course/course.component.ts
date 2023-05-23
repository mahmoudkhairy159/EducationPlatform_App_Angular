import { CourseService } from 'src/app/services/course.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Course } from 'src/app/Models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course: Course;
  course_id: string;
  hideButton: boolean;
  paramsSubscription: Subscription;

  constructor(private http: HttpClient, private route: ActivatedRoute, private CourseService: CourseService) { }
  ngOnInit(): void {
    this.course_id = this.route.snapshot.params['course_id'];
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.course_id = params['course_id'];
        this.onFetchCourse();

      });


  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSubscription.unsubscribe();
  }

  private onFetchCourse() {

    this.CourseService.fetchCourse(this.course_id).subscribe(responseData => {
      this.course = responseData;

        if (this.course.status == null || this.course.status == '1') {
          this.hideButton = true;
        }
        if (this.course.status == '0') {
          this.hideButton = false;
        }

    });

  }


  askToEnroll() {
    this.CourseService.askToEnroll(this.course.id);
    this.onFetchCourse();
  }



}
