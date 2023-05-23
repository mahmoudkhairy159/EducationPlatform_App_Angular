import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerLoginFormComponent } from './trainer-login-form.component';

describe('TrainerLoginFormComponent', () => {
  let component: TrainerLoginFormComponent;
  let fixture: ComponentFixture<TrainerLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
