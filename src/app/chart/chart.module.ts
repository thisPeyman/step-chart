import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { StepperChartComponent } from './stepper-chart/stepper-chart.component';
import { ItemFillerComponent } from './stepper-chart/item-filler/item-filler.component';


@NgModule({
  declarations: [
    ChartComponent,
    StepperChartComponent,
    ItemFillerComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule
  ]
})
export class ChartModule { }
