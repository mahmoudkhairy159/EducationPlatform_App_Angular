import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewInsideLessonComponent } from './overview-inside-lesson.component';

describe('OverviewInsideLessonComponent', () => {
  let component: OverviewInsideLessonComponent;
  let fixture: ComponentFixture<OverviewInsideLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewInsideLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewInsideLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
