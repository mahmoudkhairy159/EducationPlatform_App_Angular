import { CourseService } from '../../services/course.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Course } from 'src/app/Models/course.model';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
  courses: Course[];
  constructor(private http: HttpClient, private CourseService:CourseService) { }
  ngOnInit(){
    this.onFetchStudentOwnCourses();

  }
  private onFetchStudentOwnCourses() {
    this.CourseService.fetchStudentOwnCourses().subscribe(
      responseData => {
        this.courses = responseData['data'];
      }
      );
  }

}
