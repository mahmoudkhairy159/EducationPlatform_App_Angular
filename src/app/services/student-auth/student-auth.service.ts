import { User } from './../../Models/user.model';
import { LocalStorageService } from './../local-storage.service';
import { Student } from './../../Models/student.model';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Subject, catchError, map, tap, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class StudentAuthService {
  error = new Subject<string>();
  student = new BehaviorSubject<Student>(null);
  private tokenExpirationTimer: any;


  constructor(private http: HttpClient, private router: Router, private LocalStorageService: LocalStorageService) { }


  loginStudent(user: {
    email: string,
    password: string
  }) {

    this.http.post('http://localhost:8000/api/student/login', user,
      { params: new HttpParams().append('api_password', 'toto2212') }).pipe(
        map(responseData => {
          let user: User;
          if (responseData.hasOwnProperty('user')) {
            user = responseData['user'];
          }
          const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
          const student = new Student(user, user.auth_token, expirationDate);

          this.LocalStorageService.set('student', JSON.stringify(student));
          this.autoLogout(3600 * 1000);
          return student;
        }),
        catchError(this.handleError)).subscribe(
          responseData => {

            this.student.next(responseData);
            this.router.navigate(['student/home']);


          }

        );

  }

  autoLogin() {
    let student = JSON.parse(this.LocalStorageService.get('student'));

    if (!student) {
      return;
    }
    const loadedStudent = new Student(student.user, student.auth_token, new Date(student.auth_token_expirationDate));
    if (loadedStudent.getAuthToken()) {
      this.student.next(loadedStudent);
      const expirationDuration = new Date(student.auth_token_expirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  storeStudent(user: User) {
    this.http.post('http://localhost:8000/api/student/register', user,
      { params: new HttpParams().append('api_password', 'toto2212') }).pipe(catchError(this.handleError)).subscribe(
        responseData => {
          console.log(responseData);
        }, error => {
          this.error.next(error.message);
        }
      );
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

  logout() {
    this.student.next(null);
    this.router.navigate(['student/login']);
    this.LocalStorageService.remove('student');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

}
