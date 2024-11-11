import type { Metadata } from 'next';

import PrintContact from '@/components/PrintContact';
import Gallery from '@/components/gallery/Gallery';
import PrintsLayout from '@/components/layouts/PrintsLayout';
import PrintHero from '@/components/hero/PrintHero';

import { galleryImages } from '@/data';

export const metadata: Metadata = {
  title: 'iDesignx | Prints',
};

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
