import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerrProfileOverviewComponent } from './trainerr-profile-overview.component';

describe('TrainerrProfileOverviewComponent', () => {
  let component: TrainerrProfileOverviewComponent;
  let fixture: ComponentFixture<TrainerrProfileOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerrProfileOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerrProfileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
