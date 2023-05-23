import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Subject, catchError, map,  throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { TrainerData } from '../Models/trainerData.model';

@Injectable({ providedIn: 'root' })
export class TrainerService {
  error = new Subject<string>();
  trainer=new Subject <TrainerData>();



  constructor(private http: HttpClient, private router: Router,private LocalStorageService: LocalStorageService) { }
  fetchTrainer(trainer_id: string) {

    return this.http.get('http://localhost:8000/api/student/trainers/' + trainer_id).pipe(
      map(responseData => {
        let trainerData: TrainerData;
        if (responseData.hasOwnProperty('trainer')) {
          trainerData = responseData['trainer'];
        }
        return trainerData;
      })
    );

  }

  fetchTrainers() {
    return this.http.get('http://localhost:8000/api/student/trainers').pipe(
      map(responseData => {
        let trainers: {};
        if (responseData.hasOwnProperty('trainers')) {
          trainers = responseData['trainers'];
        }
        return trainers;

      })
    );
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
