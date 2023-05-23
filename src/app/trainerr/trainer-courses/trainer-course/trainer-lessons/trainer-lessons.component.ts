import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer-lessons',
  templateUrl: './trainer-lessons.component.html',
  styleUrls: ['./trainer-lessons.component.css']
})
export class TrainerLessonsComponent {
  lessons = [{
    id: 1,
    name_ar: 'abc',
    name_en: 'def',
    description_ar: 'ghi',
    description_en: 'jkl'
  }];
}
