import { TrainerData } from './../../../Models/trainerData.model';
import { TrainerService } from './../../../services/trainer.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription,  } from 'rxjs';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent {
  trainer: TrainerData;
  trainer_id: string;
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute , private TrainerService:TrainerService) { }

  ngOnInit() {
    this.trainer_id = this.route.snapshot.params['trainer_id'];
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.trainer_id = params['trainer_id'];
        this.onFetchTrainer(this.trainer_id);

      });
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSubscription.unsubscribe();
  }

  private onFetchTrainer(trainer_id:string){
    this.TrainerService.fetchTrainer(trainer_id).subscribe(
      responseData => {
        this.trainer = responseData;
      }
    );

  }
}
