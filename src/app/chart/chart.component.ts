import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
