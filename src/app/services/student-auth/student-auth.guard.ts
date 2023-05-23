import { StudentAuthService } from './student-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';

@Injectable({providedIn:'root'})
export class StudentAuthGuard implements CanActivate {
  constructor(private StudentAuthService:StudentAuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | Promise<boolean> | boolean {
    return this.StudentAuthService.student.pipe(take(1), map(student => {
      return !!student;

    }
    ), tap(isAuth => {
      if (!isAuth) {
        this.router.navigate(['student/login']);

  }
})
    );
  }

}
