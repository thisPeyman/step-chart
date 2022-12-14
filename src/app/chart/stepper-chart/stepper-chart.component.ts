import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { range } from 'lodash-es';
import { GridData } from './_models/grid-data.type';
import { GridItem } from './_models/grid-item.interface';

@Component({
  selector: 'app-stepper-chart',
  templateUrl: './stepper-chart.component.html',
  styleUrls: ['./stepper-chart.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperChartComponent implements OnInit {
  @Input() currentValue!: number;

  private _gridData!: GridData;

  public gridItems!: GridItem[];

  public gridSize!: number;
  public gridFillerCount!: number[];
  public prices!: number[];
  public percents!: number[];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentValue += 10000000;
      this.gridData = this._gridData;
    }, 500);
  }

  @Input() set gridData(value: GridData) {
    value.sort((a, b) => a.value - b.value);
    this._gridData = value;

    this.calculateProperties(value);
    this.gridItems = this.generateGridItems(value);
  }

  private calculateProperties(data: GridData): void {
    this.gridSize = data.length;
    this.gridFillerCount = this.range(this.gridSize - 2);
    this.prices = data.map((v) => v.value);
    this.percents = data.map((v) => v.percent).reverse();
  }

  private generateGridItems(value: GridData): GridItem[] {
    const data: GridItem[] = [];

    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      const nextElement = value[i + 1];
      const isLastElement = i === value.length - 1;

      // Note: the last element does not have endPrice and nextPercent
      data.push({
        startPrice: element.value,
        endPrice: isLastElement ? null : nextElement.value,
        currentValue: this.currentValue,
        index: i,
        nextPercent: isLastElement ? null : nextElement.percent,
        isLast: isLastElement,
      });
    }

    // css grid renders from top to bottom so we need to reverse our data
    return data.reverse();
  }

  private range(length: number): number[] {
    return [...Array(length).keys()];
  }
}
