import { Component, Input } from '@angular/core';
import { Course } from 'src/app/Models/course.model';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent {

  @Input() courses: Course[];

}
