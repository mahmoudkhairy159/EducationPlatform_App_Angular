import { TrainerAuthService } from './../../../services/trainer-auth/trainer-auth.service';
import { LocalStorageService } from './../../../services/local-storage.service';
import { TrainerData } from './../../../Models/trainerData.model';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trainer-navbar',
  templateUrl: './trainer-navbar.component.html',
  styleUrls: ['./trainer-navbar.component.css']
})
export class TrainerNavbarComponent {
  private trainerSub: Subscription;
  isAuthenticated = false;
  trainerData: TrainerData;
  trainer= JSON.parse(this.LocalStorageService.get('trainer'));


  constructor(private LocalStorageService:LocalStorageService,private TrainerAuthService:TrainerAuthService){}
  ngOnInit(): void {
    this.trainerSub = this.TrainerAuthService.trainer.subscribe(trainer => {
      this.isAuthenticated = !trainer ? false : true;
      if (this.isAuthenticated && this.trainer) {

        this.trainer = this.trainer.TrainerData;
      }
    });


  }
  onLogout() {
    this.TrainerAuthService.logout();
  }

ngOnDestroy(): void {
  this.trainerSub.unsubscribe();
}

}
