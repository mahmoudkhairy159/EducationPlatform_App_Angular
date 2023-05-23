import { TrainerData } from './../../Models/trainerData.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/Models/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  studentsCount: string;
  coursesCount: string;
  trainersCount: string;
  courses: Course [];
  trainers: TrainerData[];
  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.fetchData();
  }
  private fetchData() {
    this.http.get('http://localhost:8000/api/student/home').pipe(
        map(responseData => {
          let  data={};
            if (responseData.hasOwnProperty('data')) {
              data =  responseData['data'] ;
          }
          return data;
        })

      ).subscribe(
        responseData => {
          this.coursesCount = responseData['coursesCount'];
          this.studentsCount = responseData['studentsCount'];
          this.trainersCount = responseData['trainersCount'];
          this.courses = responseData['courses'];
          this.trainers = responseData['trainers'];
        }
      );
  }
}
