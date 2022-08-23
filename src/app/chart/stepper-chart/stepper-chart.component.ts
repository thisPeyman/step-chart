import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { range } from 'lodash-es';
import { GridItem } from './_models/grid-item.interface';

type GridData = Array<{ value: number; percent: number }>;

@Component({
  selector: 'app-stepper-chart',
  templateUrl: './stepper-chart.component.html',
  styleUrls: ['./stepper-chart.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperChartComponent implements OnInit {
  gridSize!: number;

  @Input() currentValue!: number;

  _gridData!: GridData;

  @Input() set gridData(value: GridData) {
    value.sort((a, b) => a.value - b.value);
    this._gridData = value;
    this.gridSize = value.length;

    this.gridFillerCount = range(this.gridSize - 2);

    this.gridItems = [];

    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      const nextElement = value[i + 1];

      // last element
      if (i === value.length - 1) {
        this.gridItems.push({
          startPrice: element.value,
          endPrice:
            null /* The last element does not have an endPrice (infinity) */,
          currentValue: this.currentValue,
          index: i,
        });
      } else {
        this.gridItems.push({
          startPrice: element.value,
          endPrice: nextElement.value,
          currentValue: this.currentValue,
          index: i,
        });
      }
    }

    // css grid renders from top to bottom so we need to reverse our data
    this.gridItems.reverse();
  }

  gridFillerCount!: number[];
  gridItems!: GridItem[];

  gridRealSize2 = Array(this.gridSize)
    .fill(0)
    .map((x, i) => i * 1000);

  get prices() {
    return this._gridData.map((v) => v.value);
  }

  get percents() {
    return this._gridData.map((v) => v.percent).reverse();
  }

  get gridStyle() {
    return {
      'grid-template-columns': `repeat(${this.gridSize}, 1fr)`,
      'grid-template-rows': `repeat(${this.gridSize}, 1fr)`,
    };
  }

  idGenerator(id: number): number {
    return Math.abs(id - this.gridSize);
  }

  constructor() {}

  ngOnInit(): void {
    this.currentValue = 0;

    setInterval(() => {
      this.currentValue += 10000000;
      this.gridData = this._gridData;
    }, 300);

    this.gridData = [
      { value: 0, percent: 3 },
      { value: 100000000, percent: 3 },
      { value: 150000000, percent: 7 },
      { value: 300000000, percent: 12 },
    ];
  }
}
