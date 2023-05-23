import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewInsideCourseComponent } from './overview-inside-course.component';

describe('OverviewInsideCourseComponent', () => {
  let component: OverviewInsideCourseComponent;
  let fixture: ComponentFixture<OverviewInsideCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewInsideCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewInsideCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
