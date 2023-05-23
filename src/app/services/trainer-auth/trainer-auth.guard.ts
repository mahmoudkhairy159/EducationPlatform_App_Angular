import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { TrainerAuthService } from './trainer-auth.service';

@Injectable({providedIn:'root'})
export class StudentAuthGuard implements CanActivate {
  constructor(private TrainerAuthService:TrainerAuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | Promise<boolean> | boolean {
    return this.TrainerAuthService.trainer.pipe(take(1), map(trainer => {
      return !!trainer;

    }
    ), tap(isAuth => {
      if (!isAuth) {
        this.router.navigate(['trainer/login']);

  }
})
    );
  }

}
