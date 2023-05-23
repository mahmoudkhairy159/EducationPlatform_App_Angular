import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, map } from "rxjs";
import { Course } from "../Models/course.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class CourseService{

  error = new Subject <string>();
  courses: Course[];


  constructor(private http: HttpClient,private router :Router) { }

  fetchCourses() {
    return this.http.get('http://localhost:8000/api/student/courses').pipe(
        map(responseData => {
          let  data={};
            if (responseData.hasOwnProperty('courses')) {
              data =  responseData['courses'] ;

          }
          return data;
        })
    );
  }


   fetchStudentOwnCourses() {
     return this.http.get('http://localhost:8000/api/student/myCourses').pipe(
         map(responseData => {
           let data = {};
           if (responseData.hasOwnProperty('courses')) {
             data = responseData['courses'];
           }
           return data;
         })
       );
  }


  fetchCourse(course_id:string) {
    return this.http.get('http://localhost:8000/api/student/courses/' + course_id ).pipe(
      map(responseData => {
        let course: Course;
        if (responseData.hasOwnProperty('course')) {
          course = responseData['course'];

        }
        return course;

      })
    );
  }

  deleteCourse(course_id: string) {
    this.http.delete('http://localhost:8000/api/student/courses/' + course_id).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      this.error.next(error.message);
    });
  }

  askToEnroll(course_id: string) {
    this.http.post('http://localhost:8000/api/student/askToEnrollcourse', { course_id: course_id }).pipe(
      map(responseData => {
        let msg = {};
        if (responseData.hasOwnProperty('msg')) {
          msg = responseData['msg'];

        }
        return msg;
      })
    ).subscribe(responseData => {
      console.log(responseData);
    });

  }


}
