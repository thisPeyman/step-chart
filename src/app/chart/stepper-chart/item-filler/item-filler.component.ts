import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-item-filler',
  templateUrl: './item-filler.component.html',
  styleUrls: ['./item-filler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFillerComponent implements OnInit {
  @Input() index!: number;
  @Input() isActive!: boolean;
  @Input() fillValue?: number;

  constructor() {}

  ngOnInit(): void {}
}
