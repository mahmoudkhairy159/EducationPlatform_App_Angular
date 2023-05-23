import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Subject, catchError, map, tap, throwError } from "rxjs";
import { Student } from "../Models/student.model";
import { Injectable } from "@angular/core";
import { User } from "../Models/user.model";
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class StudentService {
  error = new Subject<string>();
  student=new Subject <User>();



  constructor(private http: HttpClient, private router: Router,private LocalStorageService: LocalStorageService) { }
  fetchStudent(student_id: string) {

    return this.http.get('http://localhost:8000/api/student/users/' + student_id).pipe(
      map(responseData => {
        let student: User;
        if (responseData.hasOwnProperty('student')) {
          student = responseData['student'];
        }
        return student;
      })).subscribe(responseData => {
        this.student.next(responseData);
      });

  }

  UpdateStudent(userData:any,userId:string) {

    return this.http.put('http://localhost:8000/api/student/users/'+userId, userData).pipe(catchError(this.handleError));
  }

  changePassword(userData:any,userId:string) {

    return this.http.put('http://localhost:8000/api/student/changePassword/'+userId, userData).pipe(catchError(this.handleError));
  }






  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Unknown Error Occurred!';
    if (errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.message) {
      case 'Un Authenticated':
        errorMessage = 'Un Authenticated';
        break;
    }
    return throwError(errorMessage);
  }



}
