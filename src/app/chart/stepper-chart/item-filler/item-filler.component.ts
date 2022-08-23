import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { GridItem } from '../_models/grid-item.interface';

enum FillStates {
  EMPTY = 0,
  A_LITTLE = 2,
  A_QUARTER = 25,
  FULL = 100,
}

@Component({
  selector: 'app-item-filler',
  templateUrl: './item-filler.component.html',
  styleUrls: ['./item-filler.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFillerComponent implements OnInit {
  fillValue!: number;
  item!: GridItem;

  constructor() {}

  ngOnInit(): void {}

  @Input() set itemDetail(value: GridItem) {
    this.item = value;
    this.calculateFilledValue(value);
  }

  get priceToNextLevel(): number {
    return this.item.endPrice! - this.item.currentValue;
  }

  get hasPointer(): boolean {
    return this.fillValue !== 100 && this.fillValue !== 0;
  }

  private calculateFilledValue({
    currentValue,
    endPrice,
    startPrice,
  }: Pick<GridItem, 'currentValue' | 'startPrice' | 'endPrice'>): void {
    const { A_LITTLE, A_QUARTER, EMPTY, FULL } = FillStates;

    if (!endPrice) {
      if (currentValue > startPrice) {
        this.fillValue = A_QUARTER;
      } else if (currentValue === startPrice) {
        this.fillValue = A_LITTLE;
      } else {
        this.fillValue = EMPTY;
      }
      return;
    }

    if (currentValue === startPrice) {
      this.fillValue = A_LITTLE;
    }

    if (currentValue > startPrice && currentValue <= endPrice) {
      this.fillValue =
        ((currentValue - startPrice) / (endPrice - startPrice)) * 100;
    }

    if (currentValue < startPrice) this.fillValue = EMPTY;
    if (currentValue > endPrice) this.fillValue = FULL;
  }
}
