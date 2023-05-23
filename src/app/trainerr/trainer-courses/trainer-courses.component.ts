import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer-courses',
  templateUrl: './trainer-courses.component.html',
  styleUrls: ['./trainer-courses.component.css']
})
export class TrainerCoursesComponent {
  courses:any;

  constructor() {
    this.courses = [
      {
        id:'1',
      name: 'Math',
      description: 'this is a good math course',
      photo: 'assets/img/about.jpg',
      trainer: {
        name: 'John Doe'
      }
      },
      {
        id:'2',
        name: 'Math',
        description: 'this is a good math course',
        photo: 'assets/img/about.jpg',
        trainer: {
          name: 'John Doe'
        }
      },
      {
        id:'3',
        name: 'Math',
        description: 'this is a good math course',
        photo: 'assets/img/about.jpg',
        trainer: {
          name: 'John Doe'
        }
      }
      
    ];
  }

}
