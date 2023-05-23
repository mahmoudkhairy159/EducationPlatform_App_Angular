import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  private student: {
    name: string,
    email: string,
    address: string,
    phone: string
  };

  constructor() {
    this.student = {
      name: 'Mahmoud Khairy',
      email: 'ychag@example.com',
      address: 'Giza',
      phone: '0987654321'
    };
  }

  
  ngOnInit() {
  }

}
