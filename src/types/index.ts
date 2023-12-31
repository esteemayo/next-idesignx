import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface SocialIcon {
  id: number;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}

export type SocialIcons = SocialIcon[];

export type InfoContacts = {
  id: number;
  icon: IconDefinition;
  text: string;
}[];

export interface InfoContactProps {
  icon: IconDefinition;
  text: string;
}

export interface InfoIconProps {
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  mode: string;
}

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

export interface MenuItemsProps {
  mode: string;
  links: NavItem;
  onClose(): void;
}

export interface MenuItemProps {
  url: string;
  mode: string;
  label: string;
  onClick?(): void;
}

export interface NavButtonProps {
  label: string;
  onClick(): void;
}

export interface HamburgerProps {
  isOpen: boolean;
  onToggle(): void;
}

export interface ButtonProps {
  label: string;
  nav?: string;
  icon?: any;
  type?: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
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
  galleryImages: GalleryItem;
}

export interface ImageItemProps {
  src: string;
  value: number;
  onClick(value: number): void;
}

export interface GalleryModalProps {
  image: string;
  isOpen: boolean;
  onClose(): void;
  onClick(direction: string): void;
}

export interface GalleryImageProps {
  active: string;
  image: string;
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
  body?: React.ReactElement;
  footer?: React.ReactElement;
  onClose(): void;
  onSubmit(): void;
  secondaryAction?(): void;
}

export interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: string;
}

export interface ToggleAccountProps {
  title: string;
  label: string;
  onClick(): void;
}

export type ContactDetails = {
  id: number;
  title: string;
  address?: string;
  state?: string;
  email1?: string;
  email2?: string;
  phone1?: string;
  phone2?: string;
}[];

export interface ContactDetailProps {
  id: number;
  title: string;
  address?: string;
  state?: string;
  email1?: string;
  email2?: string;
  phone1?: string;
  phone2?: string;
}
