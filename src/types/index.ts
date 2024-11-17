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
  type?: 'submit' | 'button' | 'reset';
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
  index: number;
  lastIndex: number;
  onClose(): void;
  onChange: React.Dispatch<React.SetStateAction<number>>;
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

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
}

export type GenderList = {
  id: number;
  text: string | Gender;
}[];

export interface StoryCardProps {
  id?: number;
  icon: string;
  title: string;
  desc: string;
}

export interface ModalProps {
  isOpen: boolean;
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
  center?: boolean;
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

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginErrors {
  email?: string;
  password?: string;
}

export interface LoginInfoProps {
  email: string;
  password: string;
  errors: LoginErrors;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >;
}

export interface RegisterData {
  name: string;
  email: string;
  username: string;
  phone: string;
  gender: string;
  password: string;
  passwordConfirm: string;
}

export interface RegisterErrors {
  name?: string;
  email?: string;
  username?: string;
  phone?: string;
  gender?: string;
  password?: string;
  passwordConfirm?: string;
}

export interface RegisterInfoProps {
  name: string;
  email: string;
  errors: RegisterErrors;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
}

export interface RegisterDescriptionProps {
  username: string;
  phone: string;
  errors: RegisterErrors;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
}

export interface RegisterCredentialsProps {
  password: string;
  passwordConfirm: string;
  errors: RegisterErrors;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
}

export interface RegisterAvatarProps {
  gender: string;
  options: GenderList;
  error?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
  onChangeFile(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface AuthFooterProps {
  title: string;
  label: string;
  onToggle(): void;
}

export interface DesignData {
  name: string;
  email: string;
  address: string;
  phone: string;
  subject: string;
  desc: string;
  category: string;
}

export interface DesignErrors {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  subject?: string;
  desc?: string;
  category?: string;
}

export interface DesignInfoProps {
  name: string;
  email: string;
  address: string;
  errors: DesignErrors;
  onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void;
}

export interface DesignDescriptionProps {
  phone: string;
  subject: string;
  desc: string;
  errors: DesignErrors;
  onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void;
}

export interface IFile {
  id?: number;
  lastModified: number;
  lastModifiedDate?: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface DesignImagesProps {
  category: string;
  files: IFile[];
  options: SelectInput;
  error?: string;
  onChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void;
  onChangeFiles(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  error?: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: GenderList;
  error?: string;
}

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  path?: string;
}

export interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  path?: string;
}

export interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  path?: string;
  options: GenderList;
}

export interface UploadInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface ImageUploadProps {
  value?: File | FileList | Blob | MediaSource | any;
  error?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
