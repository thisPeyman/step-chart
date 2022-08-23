import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GridData } from './stepper-chart/_models/grid-data.type';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  gridData: GridData = [
    { value: 0, percent: 3 },
    { value: 100000000, percent: 3 },
    { value: 150000000, percent: 7 },
    { value: 300000000, percent: 12 },
  ];
  currentValue = 0;

  constructor() {}

  ngOnInit(): void {}
}
