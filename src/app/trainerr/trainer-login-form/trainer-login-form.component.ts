import { TrainerAuthService } from './../../services/trainer-auth/trainer-auth.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trainer-login-form',
  templateUrl: './trainer-login-form.component.html',
  styleUrls: ['./trainer-login-form.component.css']
})
export class TrainerLoginFormComponent {
  @ViewChild('f') loginForm: NgForm;
  trainer: {
    email: string,
    password: string
  } = { email: '', password: '' };
  constructor(private TrainerAuthService:TrainerAuthService,) { }
  onSubmit() {
    this.trainer.email = this.loginForm.value.email;
    this.trainer.password = this.loginForm.value.password;
    console.log(this.trainer);
    this.onLoginTrainer(this.trainer);
    this.loginForm.reset();
  }


  onLoginTrainer(trainer: {
    email: string,
    password: string
  }) {
    this.TrainerAuthService.loginTrainer(trainer);
  }

}
