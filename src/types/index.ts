import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { MouseEvent, ReactElement } from 'react';

export interface SocialIcon {
  id: number;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

export type SocialIcons = SocialIcon[];

export type NavItem = {
  id: number;
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

export interface ButtonProps {
  label: string;
  nav?: string;
  icon?: any;
  type?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
  outline?: string;
  small?: string;
}

export type Brands = {
  id: number;
  img: string;
}[];

export type MenuItem = {
  id: number;
  url: string;
  label: string;
}[];

export interface MenuLinksProps {
  links: MenuItem;
  mode: string;
}

export interface MenuLinkProps {
  url: string;
  label: string;
  mode: string;
}

export interface CopyRightProps {
  value: number;
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

export interface SeenOnProps {
  data: Brands;
  gradient: boolean;
}

export interface ProductsProps {
  data: ProductImages;
}

export interface PrintingsProps {
  data: PrintItems;
}

export interface CardProps {
  url: string;
  icon: IconDefinition;
  desc: string;
  title: string;
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
  id: number;
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
  id: number;
  text: string;
}[];

export type GenderList = {
  id: number;
  text: string;
}[];

export interface StoryCardProps {
  id?: number;
  icon: string;
  title: string;
  desc: string;
}

export interface ModalProps {
  isOpen?: boolean;
  title?: string;
  actionLabel: string;
  secondaryActionLabel?: string;
  disabled?: boolean;
  size?: string | null | undefined;
  body?: ReactElement;
  footer?: ReactElement;
  onClose(): void;
  onSubmit(): void;
  secondaryAction?(): void;
}
