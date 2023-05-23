import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrollmentRequestsComponent } from './course-enrollment-requests.component';

describe('CourseEnrollmentRequestsComponent', () => {
  let component: CourseEnrollmentRequestsComponent;
  let fixture: ComponentFixture<CourseEnrollmentRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEnrollmentRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseEnrollmentRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
