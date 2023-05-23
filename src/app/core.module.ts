import { AuthInterceptorService } from './services/auth-interceptor.service';
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { StudentService } from "./services/student.service";
import { CourseService } from "./services/course.service";
import { LocalStorageService } from "./services/local-storage.service";
import { StudentAuthService } from "./services/student-auth/student-auth.service";

@NgModule({
  providers: [
    CourseService,
    StudentService,
    StudentAuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },

    LocalStorageService,
 ]

})
export class CoreModule { }
