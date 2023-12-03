import InstagramIcon from '@mui/icons-material/Instagram';
import { faBagShopping, faPrint } from '@fortawesome/free-solid-svg-icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import {
  Brands,
  CardItems,
  ContactDetails,
  GalleryImage,
  GalleryItem,
  MenuItem,
  NavItem,
  PrintItems,
  ProductImages,
  SocialIcons,
  StoryImages,
} from '../types';

export const socialIcons: SocialIcons = [
  {
    id: 1,
    url: '/',
    icon: FacebookIcon,
  },
  {
    id: 2,
    url: '/',
    icon: TwitterIcon,
  },
  {
    id: 3,
    url: '/',
    icon: InstagramIcon,
  },
];

export const navItems: NavItem = [
  {
    id: 1,
    url: '/',
    label: 'Home',
  },
  {
    id: 2,
    url: '/designs',
    label: 'Designs',
  },
  {
    id: 3,
    url: '/prints',
    label: 'Prints',
  },
  {
    id: 4,
    url: '/gallery',
    label: 'Gallery',
  },
  {
    id: 5,
    url: '/about',
    label: 'About',
  },
  {
    id: 6,
    url: '/contact',
    label: 'Contact',
  },
];

export const menuItems: MenuItem = [
  {
    id: 1,
    url: '/about',
    label: 'About',
  },
  {
    id: 2,
    url: '/products',
    label: 'Products',
  },
  {
    id: 3,
    url: '/gallery',
    label: 'Gallery',
  },
  {
    id: 4,
    url: '/help',
    label: 'Help',
  },
  {
    id: 5,
    url: '/contact',
    label: 'Contact',
  },
];

export const brands: Brands = [
  {
    id: 1,
    img: '/img/logo/access.png',
  },
  {
    id: 2,
    img: '/img/logo/africa-fintech-foundry.png',
  },
  {
    id: 3,
    img: '/img/logo/stanbic.png',
  },
  {
    id: 4,
    img: '/img/logo/zenith.png',
  },
  {
    id: 5,
    img: '/img/logo/alt-school.png',
  },
  {
    id: 6,
    img: '/img/logo/union.png',
  },
  {
    id: 7,
    img: '/img/logo/acumen-digital.png',
  },
  {
    id: 8,
    img: '/img/logo/first.png',
  },
];

export const productImages: ProductImages = [
  {
    id: 1,
    img: '/img/t-shirt.jpg',
  },
  {
    id: 2,
    img: '/img/brochure-1.jpg',
  },
  {
    id: 3,
    img: '/img/brochure-2.jpg',
  },
  {
    id: 4,
    img: '/img/stationery-2.jpg',
  },
];

export const printItems: PrintItems = [
  {
    id: 1,
    title: 'Print',
    desc: "A creative team for ambitious leaders. We are a design agency made for entrepreneurs and organizations. We design and develop experiences that makes people's lives simple.",
    icon: faPrint,
    url: '/gallery',
  },
  {
    id: 2,
    title: 'Design',
    desc: 'Use graphic design to sell things, explain things, make things look better, make people laugh, make people cry, and (every once in a while) change the world.',
    icon: faBagShopping,
    url: '/gallery',
  },
];

export const galleryImages: GalleryImage = [
  {
    id: 1,
    img: '/img/gallery/gal-1.jpg',
  },
  {
    id: 2,
    img: '/img/gallery/gal-2.jpg',
  },
  {
    id: 3,
    img: '/img/gallery/gal-3.jpg',
  },
  {
    id: 4,
    img: '/img/gallery/gal-4.jpg',
  },
  {
    id: 5,
    img: '/img/gallery/gal-5.jpg',
  },
  {
    id: 6,
    img: '/img/gallery/gal-6.jpg',
  },
  {
    id: 7,
    img: '/img/gallery/gal-7.jpg',
  },
  {
    id: 8,
    img: '/img/gallery/gal-8.jpg',
  },
  {
    id: 9,
    img: '/img/gallery/gal-9.jpg',
  },
  {
    id: 10,
    img: '/img/gallery/gal-10.jpg',
  },
  {
    id: 11,
    img: '/img/gallery/gal-11.jpg',
  },
  {
    id: 12,
    img: '/img/gallery/gal-12.jpg',
  },
  {
    id: 13,
    img: '/img/gallery/gal-13.jpg',
  },
  {
    id: 14,
    img: '/img/gallery/gal-14.jpg',
  },
  {
    id: 15,
    img: '/img/gallery/gal-15.jpg',
  },
  {
    id: 16,
    img: '/img/gallery/gal-16.jpg',
  },
];

export const storyImages: StoryImages = [
  {
    id: 1,
    img: '/img/story/story-1.jpg',
    className: 'img-1',
  },
  {
    id: 2,
    img: '/img/story/story-2.jpg',
    className: 'img-2',
  },
  {
    id: 3,
    img: '/img/story/story-3.jpg',
    className: 'img-3',
  },
];

export const cardItems: CardItems = [
  {
    id: 1,
    icon: 'pencil',
    title: 'Our vision',
    desc: "A creative team for ambitious leaders. We are a design agency made for entrepreneurs and organizations. We design and develop experiences that makes people's lives simple.",
  },
  {
    id: 2,
    icon: 'office',
    title: 'Mission',
    desc: 'We help designers, small agencies and businesses bring their ideas to life. Powered by Figma, VS Code and coffee, We turn your requirements into a well-designed websites.',
  },
  {
    id: 3,
    icon: 'book',
    title: 'Commitment',
    desc: 'Use graphic design to sell things, explain things, make things look better, make people laugh, make people cry, and (every once in a while) change the world.',
  },
];

export const galleryItems: GalleryItem = [
  {
    id: 1,
    img: '/img/gallery/gal-1.jpg',
  },
  {
    id: 2,
    img: '/img/gallery/gal-2.jpg',
  },
  {
    id: 3,
    img: '/img/gallery/gal-3.jpg',
  },
  {
    id: 4,
    img: '/img/gallery/gal-4.jpg',
  },
  {
    id: 5,
    img: '/img/gallery/gal-5.jpg',
  },
  {
    id: 6,
    img: '/img/gallery/gal-6.jpg',
  },
  {
    id: 7,
    img: '/img/gallery/gal-7.jpg',
  },
  {
    id: 8,
    img: '/img/gallery/gal-8.jpg',
  },
  {
    id: 9,
    img: '/img/gallery/gal-9.jpg',
  },
  {
    id: 10,
    img: '/img/gallery/gal-10.jpg',
  },
  {
    id: 11,
    img: '/img/gallery/gal-11.jpg',
  },
  {
    id: 12,
    img: '/img/gallery/gal-12.jpg',
  },
  {
    id: 13,
    img: '/img/gallery/gal-13.jpg',
  },
  {
    id: 14,
    img: '/img/gallery/gal-14.jpg',
  },
];

export const contactDetails: ContactDetails = [
  {
    id: 1,
    title: 'Our location',
    address: '123 Lagos street, Lagos',
    state: 'state, Lagos Nigeria',
  },
  {
    id: 2,
    title: 'Email',
    email1: 'project@xteemdesigns.com',
    email2: 'esteemdesign19@gmail.com',
  },
  {
    id: 3,
    title: 'Phone number',
    phone1: '(+234) 813 611 9251',
    phone2: '(+234) 913 421 1583',
  },
];
