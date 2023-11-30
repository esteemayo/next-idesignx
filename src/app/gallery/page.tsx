import GalleryHero from '@/components/hero/GalleryHero';
import GalleryLayout from '@/components/layouts/GalleryLayout';
import PrintContact from '@/components/PrintContact';
import ImageGallery from '@/components/gallery/ImageGallery';

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
