import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Brands {
  id: number;
  img: string;
}

interface ProductImage {
  id: number;
  img: string;
}

export type ProductImages = ProductImage[];

interface PrintItem {
  id: number;
  title: string;
  desc: string;
  icon: IconDefinition;
  url: string;
}

export type PrintItems = PrintItem[];

type BrandValues = {
  readonly id: number;
  img: string;
}[];

export interface SeenOnProps {
  data: BrandValues;
  gradient: boolean;
}

export interface PrintingsProps {
  data: PrintItems;
}
