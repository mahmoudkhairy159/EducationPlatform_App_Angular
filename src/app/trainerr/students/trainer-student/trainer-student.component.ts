import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer-student',
  templateUrl: './trainer-student.component.html',
  styleUrls: ['./trainer-student.component.css']
})
export class TrainerStudentComponent {
  student ={
      id: '1',
      name: 'Mahmoud Khairy',
      email: 'ychag@example.com',
      address: 'Giza',
      phone: '0987654321',
      studentProfile: {
        photo: 'assets/img/about.jpg',
        nationalId: '1234567890',
        job: 'student',
        gender: 'male',
        governorate: 'Giza',
        city:'Talbia'
      }
    };

}
