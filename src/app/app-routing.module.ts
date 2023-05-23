import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AppComponent } from './app.component';

import { StudentRoutingModule } from './student/student-routing.module';
import { TrainerRoutingModule } from './trainerr/trainer-routing.module';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'notFound', component: NotFoundPageComponent },
  { path: '**', redirectTo: 'notFound' }

];

@NgModule({
  imports: [
    TrainerRoutingModule,
    StudentRoutingModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
