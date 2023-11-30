import dynamic from 'next/dynamic';

import GalleryHero from '@/components/hero/GalleryHero';
import GalleryLayout from '@/components/layouts/GalleryLayout';

const PrintContact = dynamic(() => import('@/components/PrintContact'), {
  ssr: false,
});
const ImageGallery = dynamic(
  () => import('@/components/gallery/ImageGallery'),
  {
    ssr: false,
  }
);

const Gallery = () => {
  return (
    <GalleryLayout>
      <GalleryHero />
      <ImageGallery />
      <PrintContact bcg='/img/gallery/gal-15.jpg' />
    </GalleryLayout>
  );
};

export default Gallery;
