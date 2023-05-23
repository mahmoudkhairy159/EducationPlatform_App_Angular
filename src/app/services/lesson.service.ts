import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, map } from "rxjs";
import { Course } from "../Models/course.model";
import { Lesson } from "../Models/lesson.model";

@Injectable({ providedIn: 'root' })
export class LessonService{

  error = new Subject <string>();
  lessons: Lesson[];
  lesson:Lesson;

  constructor(private http: HttpClient) { }




  fetchLesson(lesson_id:string) {
    return this.http.get('http://localhost:8000/api/student/lessons/' + lesson_id).pipe(
      map(responseData => {
        let lesson: Lesson;
        if (responseData.hasOwnProperty('lesson')) {
          lesson = responseData['lesson'];
        }
        return lesson;

      }));
  }






}
