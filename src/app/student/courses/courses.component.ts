import { CourseService } from '../../services/course.service';
import { Component } from '@angular/core';
import { Course } from 'src/app/Models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


  courses: Course[];
  error = null;
  constructor(private CourseService: CourseService) { }
  ngOnInit() {
    this.onFetchCourses();
  }

  private onFetchCourses() {
    this.CourseService.fetchCourses().subscribe(
      responseData => {
        this.courses = responseData['data'];
      },error => {
        this.error=error.message;
      }
      );
  }



}
