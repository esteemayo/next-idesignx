import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface SocialIcon {
  readonly id: number;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

export type SocialIcons = SocialIcon[];

export type NavItem = {
  readonly id: number;
  url: string;
  label: string;
}[];

export interface NavItemsProps {
  links: NavItem;
  path: string;
}

export interface NavItemProps {
  url: string;
  label: string;
  path: string;
}

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

export interface ProductsProps {
  data: ProductImages;
}

export interface PrintingsProps {
  data: PrintItems;
}

export type GalleryImage = {
  id: number;
  img: string;
}[];

export interface GalleryProps {
  data: GalleryImage;
}

export type GalleryItem = {
  id: number;
  img: string;
}[];

export interface ImageGalleryProps {
  images: GalleryItem;
  onOpen(value: number): void;
}

export interface PrintContactProps {
  bcg?: string;
}

export interface ImageModalProps {
  image: string;
  isOpen: boolean;
  onClose(): void;
  onClick(direction: string): void;
}

interface StoryImage {
  id: number;
  img: string;
  className: string;
}

export type StoryImages = StoryImage[];

export interface StoryImageProps {
  images: StoryImages;
}

export interface CardItem {
  readonly id: number;
  icon: string;
  title: string;
  desc: string;
}

export type CardItems = CardItem[];

export interface StoryCardsProps {
  data: CardItems;
}

export interface LocationProps {
  mode: string;
}

export type SelectInput = {
  readonly id: number;
  text: string;
}[];

export type GenderList = {
  readonly id: number;
  text: string;
}[];
