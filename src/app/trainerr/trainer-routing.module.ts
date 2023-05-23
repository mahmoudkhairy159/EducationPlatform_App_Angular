import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerCoursesComponent } from './trainer-courses/trainer-courses.component';
import { TrainerCourseComponent } from './trainer-courses/trainer-course/trainer-course.component';
import { TrainerrProfileComponent } from './trainerr-profile/trainerr-profile.component';
import { TrainerLessonComponent } from './trainer-courses/trainer-course/trainer-lessons/trainer-lesson/trainer-lesson.component';
import { TrainerrProfileOverviewComponent } from './trainerr-profile/trainerr-profile-overview/trainerr-profile-overview.component';
import { TrainerrProfileEditProfileComponent } from './trainerr-profile/trainerr-profile-edit-profile/trainerr-profile-edit-profile.component';
import { TrainerrProfileChangePasswordComponent } from './trainerr-profile/trainerr-profile-change-password/trainerr-profile-change-password.component';
import { TrainerrRegisterFormComponent } from './trainerr-register-form/trainerr-register-form.component';
import { TrainerLoginFormComponent } from './trainer-login-form/trainer-login-form.component';
import { TrainerStudentComponent } from './students/trainer-student/trainer-student.component';
import { StudentsComponent } from './students/students.component';
import { EditCourseFormComponent } from './trainer-courses/edit-course-form/edit-course-form.component';
import { AddCourseFormComponent } from './trainer-courses/add-course-form/add-course-form.component';

const appRoutes: Routes = [
  { path: 'trainer/home', component: TrainerHomeComponent /*,canActivate:[TrainerAuthGuard] */},
  { path: 'trainer/courses', component: TrainerCoursesComponent /*,canActivate:[TrainerAuthGuard]*/ },
  { path: 'trainer/course/:course_id', component: TrainerCourseComponent /*,canActivate: [TrainerAuthGuard]*/ },
  {path: 'trainer/course/:course_id/edit', component: EditCourseFormComponent /*,canActivate: [TrainerAuthGuard]*/},
  {path: 'trainer/course/add', component: AddCourseFormComponent /*,canActivate: [TrainerAuthGuard]*/},
  { path: 'trainer/students', component: StudentsComponent /*,canActivate:[TrainerAuthGuard]*/ },
  { path: 'trainer/studentProfile/:student_id', component: TrainerStudentComponent/*,canActivate:[TrainerAuthGuard]*/ },

  { path: 'trainer/course/:course_id/:lesson_id', component: TrainerLessonComponent /*,canActivate: /*[TrainerAuthGuard]*/},
  { path: 'trainer/profile/:trainer_id', component: TrainerrProfileComponent/*,canActivate:[TrainerAuthGuard]*/,children:[
    { path: '', component: TrainerrProfileOverviewComponent/*,canActivate:[TrainerAuthGuard]*/ },
    { path: 'edit', component:  TrainerrProfileEditProfileComponent },
    { path: 'changePassword', component: TrainerrProfileChangePasswordComponent  },
  ] },
  { path: 'trainer/login', component: TrainerLoginFormComponent },
  { path: 'trainer/register', component: TrainerrRegisterFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class TrainerRoutingModule { }
