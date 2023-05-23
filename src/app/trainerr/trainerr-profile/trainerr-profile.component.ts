import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-trainerr-profile',
  templateUrl: './trainerr-profile.component.html',
  styleUrls: ['./trainerr-profile.component.css']
})
export class TrainerrProfileComponent {
  @Input() trainer: {
    name: string,
    email: string,
    phone: string,
    address: string,
    trainerProfile: {
      job: string,
      description_ar: string,
      description_en: string,
      governorate: string,
      city: string,
      photo: string,
      nationalId: string,
      gender: string,
      

    }
  };

  constructor() {
    this.trainer = {
      name: 'John Doe',
      email: 'mahmoudkhairy159@gmail.com',
      phone: '123456789',
      address:'giza',
      trainerProfile: {
        job: 'teacher',
        description_ar: 'I am a good teacher',
        description_en: 'I am a good teacher',
        governorate: 'Giza',
        city: 'Talbya',
        photo: 'assets/img/about.jpg',
        nationalId: '123456789',
        gender: 'male',
      }
    };
  }

}
