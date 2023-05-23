import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CountsComponent } from './counts/counts.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { FeaturesComponent } from './features/features.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrainersComponent } from '../trainers/trainers.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    CountsComponent,
    WhyUsComponent,
    FeaturesComponent,
    PopularCoursesComponent,
    TrainersComponent

  ],
  exports: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    CountsComponent,
    WhyUsComponent,
    FeaturesComponent,
    PopularCoursesComponent,
    TrainersComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
 
})
export class HomeModule { }
