import dynamic from 'next/dynamic';

import { galleryImages } from '@/data';
import PrintHero from '@/components/hero/PrintHero';
import PrintsLayout from '@/components/layouts/PrintsLayout';

const Gallery = dynamic(() => import('@/components/gallery/Gallery'), {
  ssr: false,
});
const PrintContact = dynamic(() => import('@/components/PrintContact'), {
  ssr: false,
});

const Prints = () => {
  return (
    <PrintsLayout>
      <PrintHero />
      <Gallery data={galleryImages} />
      <PrintContact />
    </PrintsLayout>
  );
};

export default Prints;
