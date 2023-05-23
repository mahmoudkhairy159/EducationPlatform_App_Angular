import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoginFormComponent } from './student-login-form.component';

describe('StudentLoginFormComponent', () => {
  let component: StudentLoginFormComponent;
  let fixture: ComponentFixture<StudentLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
