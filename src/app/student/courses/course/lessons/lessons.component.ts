import { Component, Input } from '@angular/core';
import { Lesson } from 'src/app/Models/lesson.model';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent {
  @Input() lessons: Lesson[];

}


