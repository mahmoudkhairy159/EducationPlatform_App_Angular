import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsideLessonComponent } from './edit-inside-lesson.component';

describe('EditInsideLessonComponent', () => {
  let component: EditInsideLessonComponent;
  let fixture: ComponentFixture<EditInsideLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsideLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInsideLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
