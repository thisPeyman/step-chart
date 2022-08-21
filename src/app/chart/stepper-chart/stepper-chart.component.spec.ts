import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperChartComponent } from './stepper-chart.component';

describe('StepperChartComponent', () => {
  let component: StepperChartComponent;
  let fixture: ComponentFixture<StepperChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
