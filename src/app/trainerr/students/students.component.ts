import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  courses = [
    {
      name_en: 'abc',
      students: [
        {
          id:'1',
        name: 'Mahmoud Khairy',
        email: 'ychag@example.com',
        address: 'Giza',
        phone: '0987654321',
        studentProfile: {
          photo: 'assets/img/about.jpg',
          nationalId: '1234567890',
        }
      }
      ],
    }];
}
