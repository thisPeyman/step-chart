import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { GridItem } from '../_models/grid-item.interface';

@Component({
  selector: 'app-item-filler',
  templateUrl: './item-filler.component.html',
  styleUrls: ['./item-filler.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFillerComponent implements OnInit {
  fillValue!: number;

  @Input() set itemDetail(value: GridItem) {
    const { currentValue, endPrice, startPrice } = value;

    if (!endPrice) {
      if (currentValue > startPrice) {
        this.fillValue = 25;
      } else if (currentValue === startPrice) {
        this.fillValue = 2;
      } else {
        this.fillValue = 0;
      }
      return;
    }

    if (currentValue === startPrice) {
      this.fillValue = 2;
      return;
    }

    if (currentValue > startPrice && currentValue <= endPrice) {
      this.fillValue =
        ((currentValue - startPrice) / (endPrice - startPrice)) * 100;
      return;
    }

    if (currentValue < startPrice) this.fillValue = 0;
    if (currentValue > endPrice) this.fillValue = 100;
  }

  get hasPointer(): boolean {
    return this.fillValue !== 100 && this.fillValue !== 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
