import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer-lesson',
  templateUrl: './trainer-lesson.component.html',
  styleUrls: ['./trainer-lesson.component.css']
})
export class TrainerLessonComponent {
  lesson = {
    id: 1,
    name_ar: 'abc',
    name_en: 'def',
    video: 'assets/img/about.jpg',
    material: 'assets/img/about.jpg',
    assignment: 'assets/img/about.jpg',
    assignmentCorrectAnswer: 'assets/img/about.jpg',
    exam: 'assets/img/about.jpg',
    examCorrectAnswer: 'assets/img/about.jpg',
    description_ar: 'ghi',
    description_en: 'jkl',
    examTotalMark:'10',
  };

}
