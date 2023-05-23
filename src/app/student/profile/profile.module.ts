import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProfileOverViewComponent } from './profile-over-view/profile-over-view.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CoreModule } from 'src/app/core.module';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [
 
    ProfileComponent,
    ProfileOverViewComponent,
    EditProfileComponent,
    ChangePasswordComponent,   

  ],
  exports: [
     
    ProfileComponent,
    ProfileOverViewComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ]
 
})
export class ProfileModule { }
