export interface GridItem {
  startPrice: number;
  endPrice: number | null;
  currentValue: number;
  index: number;
  nextPercent: number | null;
  isLast: boolean;
}
