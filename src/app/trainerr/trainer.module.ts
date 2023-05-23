import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core.module';
import { TrainerRoutingModule } from './trainer-routing.module';
import { TrainerrComponent } from './trainerr.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';
import { TrainerCoursesComponent } from './trainer-courses/trainer-courses.component';
import { TrainerCourseComponent } from './trainer-courses/trainer-course/trainer-course.component';
import { AddCourseFormComponent } from './trainer-courses/add-course-form/add-course-form.component';
import { EditCourseFormComponent } from './trainer-courses/edit-course-form/edit-course-form.component';
import { AddLessonFormComponent } from './trainer-courses/trainer-course/trainer-lessons/add-lesson-form/add-lesson-form.component';
import { EditLessonFormComponent } from './trainer-courses/trainer-course/trainer-lessons/edit-lesson-form/edit-lesson-form.component';
import { TrainerLessonsComponent } from './trainer-courses/trainer-course/trainer-lessons/trainer-lessons.component';
import { StudentsComponent } from './students/students.component';
import { CourseEnrollmentRequestsComponent } from './trainer-courses/trainer-course/course-enrollment-requests/course-enrollment-requests.component';
import { TrainerrProfileComponent } from './trainerr-profile/trainerr-profile.component';
import { TrainerrProfileOverviewComponent } from './trainerr-profile/trainerr-profile-overview/trainerr-profile-overview.component';
import { TrainerrProfileEditProfileComponent } from './trainerr-profile/trainerr-profile-edit-profile/trainerr-profile-edit-profile.component';
import { TrainerrProfileChangePasswordComponent } from './trainerr-profile/trainerr-profile-change-password/trainerr-profile-change-password.component';
import { EditInsideCourseComponent } from './trainer-courses/trainer-course/edit-inside-course/edit-inside-course.component';
import { OverviewInsideCourseComponent } from './trainer-courses/trainer-course/overview-inside-course/overview-inside-course.component';
import { OverviewInsideLessonComponent } from './trainer-courses/trainer-course/trainer-lessons/trainer-lesson/overview-inside-lesson/overview-inside-lesson.component';
import { EditInsideLessonComponent } from './trainer-courses/trainer-course/trainer-lessons/trainer-lesson/edit-inside-lesson/edit-inside-lesson.component';
import { TrainerSidebarComponent } from './trainer-header/trainer-sidebar/trainer-sidebar.component';
import { TrainerNavbarComponent } from './trainer-header/trainer-navbar/trainer-navbar.component';
import { TrainerLoginFormComponent } from './trainer-login-form/trainer-login-form.component';
import { TrainerrRegisterFormComponent } from './trainerr-register-form/trainerr-register-form.component';
import { TrainerLessonComponent } from './trainer-courses/trainer-course/trainer-lessons/trainer-lesson/trainer-lesson.component';
import { TrainerStudentComponent } from './students/trainer-student/trainer-student.component';

@NgModule({
  declarations: [
    TrainerrComponent,
    TrainerHomeComponent,
    TrainerCoursesComponent,
    TrainerCourseComponent,
    AddCourseFormComponent,
    EditCourseFormComponent,
    AddLessonFormComponent,
    EditLessonFormComponent,
    TrainerLessonsComponent,
    TrainerLessonComponent,
    StudentsComponent,
    TrainerStudentComponent,
    CourseEnrollmentRequestsComponent,
    TrainerrProfileComponent,
    TrainerrProfileOverviewComponent,
    TrainerrProfileEditProfileComponent,
    TrainerrProfileChangePasswordComponent,
    EditInsideCourseComponent,
    OverviewInsideCourseComponent,
    OverviewInsideLessonComponent,
    EditInsideLessonComponent,
    TrainerSidebarComponent,
    TrainerNavbarComponent,
    TrainerLoginFormComponent,
    TrainerrRegisterFormComponent

  ],
  exports: [
    TrainerrComponent,
    TrainerHomeComponent,
    TrainerCoursesComponent,
    TrainerCourseComponent,
    AddCourseFormComponent,
    EditCourseFormComponent,
    AddLessonFormComponent,
    EditLessonFormComponent,
    TrainerLessonsComponent,
    TrainerLessonComponent,
    StudentsComponent,
    CourseEnrollmentRequestsComponent,
    TrainerrProfileComponent,
    TrainerrProfileOverviewComponent,
    TrainerrProfileEditProfileComponent,
    TrainerrProfileChangePasswordComponent,
    EditInsideCourseComponent,
    OverviewInsideCourseComponent,
    OverviewInsideLessonComponent,
    EditInsideLessonComponent,
    TrainerSidebarComponent,
    TrainerNavbarComponent,
    TrainerLoginFormComponent,
    TrainerrRegisterFormComponent,
    TrainerRoutingModule,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    TrainerRoutingModule,
  ]

})
export class TrainerModule { }
