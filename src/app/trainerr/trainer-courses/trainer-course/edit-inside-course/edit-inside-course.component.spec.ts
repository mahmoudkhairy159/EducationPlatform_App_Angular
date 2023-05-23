import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsideCourseComponent } from './edit-inside-course.component';

describe('EditInsideCourseComponent', () => {
  let component: EditInsideCourseComponent;
  let fixture: ComponentFixture<EditInsideCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsideCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInsideCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
