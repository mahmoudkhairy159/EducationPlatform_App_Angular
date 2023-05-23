import { TrainerData } from './../../Models/trainerData.model';
import { Trainer } from './../../Models/trainer.model';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { BehaviorSubject, Subject, catchError, map, tap, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Injectable({ providedIn: 'root' })
export class TrainerAuthService {
  error = new Subject<string>();
  trainer = new BehaviorSubject<Trainer>(null);
  private tokenExpirationTimer: any;


  constructor(private http: HttpClient, private router: Router, private LocalStorageService: LocalStorageService) { }


  loginTrainer(trainer: {
    email: string,
    password: string
  }) {

    this.http.post('http://localhost:8000/api/trainer/login', trainer,
      { params: new HttpParams().append('api_password', 'toto2212') }).pipe(
        map(responseData => {
          let trainerData: TrainerData;
          if (responseData.hasOwnProperty('trainer')) {
            trainerData = responseData['trainer'];
          }
          const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
          const trainer = new Trainer(trainerData, trainerData.auth_token, expirationDate);

          this.LocalStorageService.set('trainer', JSON.stringify(trainer));
          this.autoLogout(3600 * 1000);
          return trainer;
        }),
        catchError(this.handleError)).subscribe(
          responseData => {
            this.trainer.next(responseData);
            this.router.navigate(['trainer/home']);
          }

        );

  }

  autoLogin() {
    let trainer = JSON.parse(this.LocalStorageService.get('trainer'));

    if (!trainer) {
      return;
    }
    const loadedStudent = new Trainer(trainer.TrainerData, trainer.auth_token, new Date(trainer.auth_token_expirationDate));
    if (loadedStudent.getAuthToken()) {
      this.trainer.next(loadedStudent);
      const expirationDuration = new Date(trainer.auth_token_expirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  storeTrainer(trainerData: any) {
    this.http.post('http://localhost:8000/api/trainer/register', trainerData,
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
    this.trainer.next(null);
    this.router.navigate(['trainer/login']);
    this.LocalStorageService.remove('trainer');
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
