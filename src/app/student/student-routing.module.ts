import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { LessonComponent } from './courses/course/lessons/lesson/lesson.component';
import { CourseComponent } from './courses/course/course.component';
import { StudentAboutComponent } from './student-about/student-about.component';
import { StudentEventsComponent } from './student-events/student-events.component';
import { StudentPricingComponent } from './student-pricing/student-pricing.component';
import { StudentContactComponent } from './student-contact/student-contact.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ProfileComponent } from './profile/profile.component';
import { TrainerProfileComponent } from './trainers/trainer-profile/trainer-profile.component';
import { ProfileOverViewComponent } from './profile/profile-over-view/profile-over-view.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { StudentLoginFormComponent } from './student-login-form/student-login-form.component';
import { StudentRegisterFormComponent } from './student-register-form/student-register-form.component';
import { StudentAuthGuard } from '../services/student-auth/student-auth.guard';



const appRoutes: Routes = [
  { path: 'student/home', component: HomeComponent ,canActivate:[StudentAuthGuard] },
  { path: 'student/courses', component: CoursesComponent ,canActivate:[StudentAuthGuard] },
  { path: 'student/mycourses', component: MyCoursesComponent ,canActivate:[StudentAuthGuard] },

  {path: 'student/course/:course_id', component: CourseComponent, canActivate: [StudentAuthGuard]},
  { path: 'student/course/:course_id/:lesson_id', component: LessonComponent ,canActivate: [StudentAuthGuard]},


  { path: 'student/about', component: StudentAboutComponent,canActivate:[StudentAuthGuard] },
  { path: 'student/events', component: StudentEventsComponent,canActivate:[StudentAuthGuard] },
  { path: 'student/pricing', component: StudentPricingComponent,canActivate:[StudentAuthGuard] },
  { path: 'student/contact', component: StudentContactComponent ,canActivate:[StudentAuthGuard]},
  { path: 'student/trainers', component: TrainersComponent,canActivate:[StudentAuthGuard]},
  { path: 'student/trainerProfile/:trainer_id', component: TrainerProfileComponent,canActivate:[StudentAuthGuard] },
  { path: 'student/profile/:student_id', component: ProfileComponent,canActivate:[StudentAuthGuard], children:[
    { path: '', component: ProfileOverViewComponent,canActivate:[StudentAuthGuard] },
    { path: 'edit', component:  EditProfileComponent },
    { path: 'changePassword', component: ChangePasswordComponent  },
  ] },
  { path: 'student/login', component: StudentLoginFormComponent },
  { path: 'student/register', component: StudentRegisterFormComponent },


];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class StudentRoutingModule { }
