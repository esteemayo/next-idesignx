type BrandValues = {
  readonly id: number;
  img: string;
}[];

export interface SeenOnProps {
  data: BrandValues;
  gradient: boolean;
}
