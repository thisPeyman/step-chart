import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-stepper-chart',
  templateUrl: './stepper-chart.component.html',
  styleUrls: ['./stepper-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperChartComponent implements OnInit {
  @Input() gridSize = 4;

  gridGap = Array(this.gridSize - 2)
    .fill(0)
    .map((x, i) => i);

  gridRealSize = Array(this.gridSize + 1)
    .fill(0)
    .map((x, i) => i);

  gridRealSize2 = Array(this.gridSize)
    .fill(0)
    .map((x, i) => i * 1000);

  get gridStyle() {
    return {
      'grid-template-columns': `repeat(${this.gridSize}, 1fr)`,
      'grid-template-rows': `repeat(${this.gridSize}, 100px)`,
    };
  }

  test(x: any): number {
    return Math.abs(x - this.gridSize);
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
