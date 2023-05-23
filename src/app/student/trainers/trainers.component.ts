import { TrainerData } from './../../Models/trainerData.model';
import { TrainerService } from './../../services/trainer.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component,Input } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent {
  @Input() trainers:TrainerData [];
  constructor(private TrainerService:TrainerService) { }
  ngOnInit(): void {
    this.onFetchTrainers();
  }
  private onFetchTrainers() {
   this.TrainerService.fetchTrainers() .subscribe(
      (responseData:TrainerData)=> {
        this.trainers = responseData['data'];
      }

    );
  }

}
