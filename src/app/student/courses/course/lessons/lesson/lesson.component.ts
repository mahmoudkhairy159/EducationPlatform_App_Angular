import { LessonService } from '../../../../../services/lesson.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Lesson } from 'src/app/Models/lesson.model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {

  lesson?: Lesson;
  course_id: string;
  lesson_id: string;

  paramsSubscription: Subscription;
  constructor(private readonly route: ActivatedRoute, private  readonly LessonService: LessonService) { }


  ngOnInit(): void {
    this.course_id = this.route.snapshot.params['course_id'];
    this.lesson_id = this.route.snapshot.params['lesson_id'];

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.course_id = params['course_id'];
        this.lesson_id = params['lesson_id'];
        this.onFetchLesson( this.lesson_id);
      });

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSubscription.unsubscribe();
  }
  onFetchLesson(lesson_id:string) {
    this.LessonService.fetchLesson(lesson_id).subscribe(responseData => {
      this.lesson = responseData
    });
  }

}

