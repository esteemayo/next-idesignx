import type { Metadata } from 'next';

import ImageGallery from '@/components/gallery/ImageGallery';
import PrintContact from '@/components/PrintContact';
import GalleryLayout from '@/components/layouts/GalleryLayout';
import GalleryHero from '@/components/hero/GalleryHero';

import { galleryItems } from '@/data';

export const metadata: Metadata = {
  title: 'iDesignx | Gallery',
};

const Gallery = () => {
  return (
    <GalleryLayout>
      <GalleryHero />
      <ImageGallery galleryImages={galleryItems} />
      <PrintContact bcg='/img/gallery/gal-15.jpg' />
    </GalleryLayout>
  );
};

export default Gallery;
