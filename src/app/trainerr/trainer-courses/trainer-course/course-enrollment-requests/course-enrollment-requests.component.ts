import { Component } from '@angular/core';

@Component({
  selector: 'app-course-enrollment-requests',
  templateUrl: './course-enrollment-requests.component.html',
  styleUrls: ['./course-enrollment-requests.component.css']
})
export class CourseEnrollmentRequestsComponent {
  students = [{
    name: 'Mahmoud Khairy',
    email: 'ychag@example.com',
    address: 'Giza',
    phone: '0987654321',
    studentProfile: {
      photo: 'assets/img/about.jpg',
      nationalId: '1234567890',
    }
  },
  {
    name: 'Mahmoud Khairy',
    email: 'ychag@example.com',
    address: 'Giza',
    phone: '0987654321',
    studentProfile: {
      photo: 'assets/img/about.jpg',
      nationalId: '1234567890',
    }
  }
    , {
    name: 'Mahmoud Khairy',
    email: 'ychag@example.com',
    address: 'Giza',
    phone: '0987654321',
    studentProfile: {
      photo: 'assets/img/about.jpg',
      nationalId: '1234567890',
    }
  }];
   
  
    
}
