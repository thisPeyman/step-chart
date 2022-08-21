import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFillerComponent } from './item-filler.component';

describe('ItemFillerComponent', () => {
  let component: ItemFillerComponent;
  let fixture: ComponentFixture<ItemFillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
