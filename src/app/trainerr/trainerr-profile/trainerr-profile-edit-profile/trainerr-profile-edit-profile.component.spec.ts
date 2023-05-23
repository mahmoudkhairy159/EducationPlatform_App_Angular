import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerrProfileEditProfileComponent } from './trainerr-profile-edit-profile.component';

describe('TrainerrProfileEditProfileComponent', () => {
  let component: TrainerrProfileEditProfileComponent;
  let fixture: ComponentFixture<TrainerrProfileEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerrProfileEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerrProfileEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
