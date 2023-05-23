import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer-course',
  templateUrl: './trainer-course.component.html',
  styleUrls: ['./trainer-course.component.css']
})
export class TrainerCourseComponent {
  course: {
    id:string,
    name_ar: string,
    name_en: string,
    description_ar: string,
    description_en: string,
    photo: string,
    trainer: {
      name:string
    }
  };

  constructor() {
    this.course = {
      id: '1',
      name_ar: 'Math',
      name_en: 'Math',
      description_ar: 'this is a good math course',
      description_en: 'this is a good math course',
      photo: 'assets/img/about.jpg',
      trainer: {
        name: 'John Doe'
      }
    };
  }

}
