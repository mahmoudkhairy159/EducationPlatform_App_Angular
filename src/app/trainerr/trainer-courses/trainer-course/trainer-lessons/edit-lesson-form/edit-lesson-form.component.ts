import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-lesson-form',
  templateUrl: './edit-lesson-form.component.html',
  styleUrls: ['./edit-lesson-form.component.css']
})
export class EditLessonFormComponent {
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
