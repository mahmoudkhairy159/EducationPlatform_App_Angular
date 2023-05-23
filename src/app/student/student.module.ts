import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student.component';
import { TrainerProfileComponent } from './trainers/trainer-profile/trainer-profile.component';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { StudentAboutComponent } from './student-about/student-about.component';
import { StudentEventsComponent } from './student-events/student-events.component';
import { StudentPricingComponent } from './student-pricing/student-pricing.component';
import { StudentContactComponent } from './student-contact/student-contact.component';
import { CoursesModule } from './courses/courses.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { StudentRoutingModule } from './student-routing.module';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { StudentLoginFormComponent } from './student-login-form/student-login-form.component';
import { StudentRegisterFormComponent } from './student-register-form/student-register-form.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core.module';

@NgModule({
  declarations: [
    StudentComponent,
    TrainerProfileComponent,
    StudentHeaderComponent,
    StudentAboutComponent,
    StudentEventsComponent,
    StudentPricingComponent,
    StudentContactComponent,
    StudentRegisterFormComponent,
    StudentLoginFormComponent,
    MyCoursesComponent,

  ],
  exports: [
    StudentComponent,
    MyCoursesComponent,
    TrainerProfileComponent,
    StudentHeaderComponent,
    StudentAboutComponent,
    StudentEventsComponent,
    StudentPricingComponent,
    StudentContactComponent,
    HomeModule,
    StudentRoutingModule,
    StudentRegisterFormComponent,
    StudentLoginFormComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    StudentRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    ProfileModule,
    CoreModule,
    CoursesModule

  ]

})
export class StudentModule { }
