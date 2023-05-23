import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerrProfileChangePasswordComponent } from './trainerr-profile-change-password.component';

describe('TrainerrProfileChangePasswordComponent', () => {
  let component: TrainerrProfileChangePasswordComponent;
  let fixture: ComponentFixture<TrainerrProfileChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerrProfileChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerrProfileChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
