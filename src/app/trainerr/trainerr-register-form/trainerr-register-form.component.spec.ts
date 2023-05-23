import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerrRegisterFormComponent } from './trainerr-register-form.component';

describe('TrainerrRegisterFormComponent', () => {
  let component: TrainerrRegisterFormComponent;
  let fixture: ComponentFixture<TrainerrRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerrRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerrRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
