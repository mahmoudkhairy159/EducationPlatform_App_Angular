
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { take, exhaustMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { StudentAuthService } from "./student-auth/student-auth.service";
import { TrainerAuthService } from "./trainer-auth/trainer-auth.service";
@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  student:any;
  trainer: any;
  constructor(private StudentAuthService:StudentAuthService,private TrainerAuthService:TrainerAuthService ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.StudentAuthService.student.pipe(take(1)).subscribe(student => {
      this.student = student;
    });
    this.TrainerAuthService.trainer.pipe(take(1)).subscribe(trainer => {
      this.trainer = trainer;
    });
    if (this.student) {
      return this.StudentAuthService.student.pipe(take(1), exhaustMap(student => {
        if (req.url == 'http://localhost:8000/api/student/login' || req.url == 'http://localhost:8000/api/student/register') {
        return next.handle(req);
        }
        let auth_token = student.getAuthToken();
        if (!auth_token) {
          return next.handle(req);
          }
        let ReqParams = new HttpParams();
        ReqParams = ReqParams.append('api_password', environment.api_password);
        ReqParams = ReqParams.append('lang', 'en');
        const modifiedRequest = req.clone({
          headers: new HttpHeaders({
            'auth_token':auth_token
          }),
          params: ReqParams,
        });

        return next.handle(modifiedRequest);
      }));

    }
    if (this.trainer) {
      return this.TrainerAuthService.trainer.pipe(take(1), exhaustMap(trainer => {
        if (req.url == 'http://localhost:8000/api/trainer/login' || req.url == 'http://localhost:8000/api/trainer/register') {
        return next.handle(req);
        }
        let auth_token = trainer.getAuthToken();
        if (!auth_token) {
          return next.handle(req);
          }
        let ReqParams = new HttpParams();
        ReqParams = ReqParams.append('api_password', environment.api_password);
        ReqParams = ReqParams.append('lang', 'en');
        const modifiedRequest = req.clone({
          headers: new HttpHeaders({
            'auth_token':auth_token
          }),
          params: ReqParams,
        });

        return next.handle(modifiedRequest);
      }));
    }

    return next.handle(req);

}

}
