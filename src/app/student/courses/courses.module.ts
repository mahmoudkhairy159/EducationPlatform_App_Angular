import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { LessonsComponent } from './course/lessons/lessons.component';
import { LessonComponent } from './course/lessons/lesson/lesson.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    LessonsComponent,
    LessonComponent,

  ],
  exports: [
    CoursesComponent,
    CourseComponent,
    LessonsComponent,
    LessonComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ]

})
export class CoursesModule { }
