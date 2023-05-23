import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StudentModule } from './student/student.module';
import { CoreModule } from './core.module';
import { TrainerModule } from './trainerr/trainer.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StudentModule,
    CoreModule,
    TrainerModule,


  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
