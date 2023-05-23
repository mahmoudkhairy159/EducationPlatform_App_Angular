import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPricingComponent } from './student-pricing.component';

describe('StudentPricingComponent', () => {
  let component: StudentPricingComponent;
  let fixture: ComponentFixture<StudentPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
