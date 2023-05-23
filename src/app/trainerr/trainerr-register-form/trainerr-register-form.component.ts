import { TrainerAuthService } from './../../services/trainer-auth/trainer-auth.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerr-register-form',
  templateUrl: './trainerr-register-form.component.html',
  styleUrls: ['./trainerr-register-form.component.css']
})
export class TrainerrRegisterFormComponent {
  @ViewChild('f') registerForm: NgForm;
  error = null;
  trainerData: {
    name: string,
    email: string,
    address: string,
    phone: string,
    password: string,
    password_confirmation: string,
  } = {
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    password_confirmation: '',
    };





  constructor(private router:Router,private TrainerAuthService:TrainerAuthService) { }
  onSubmit() {
    this.trainerData.name = this.registerForm.value.name;
    this.trainerData.email = this.registerForm.value.email;
    this.trainerData.address = this.registerForm.value.address;
    this.trainerData.phone = this.registerForm.value.phone;
    this.trainerData.password = this.registerForm.value.password;
    this.trainerData.password_confirmation = this.registerForm.value.password_confirmation
    console.log(this.trainerData);
    this.onCreateTrainer(this.trainerData);
    this.registerForm.reset();
    this.router.navigate(['trainer/login']);
  }


  onCreateTrainer( trainerData:any) {
    this.TrainerAuthService.storeTrainer(trainerData);
   }

}
