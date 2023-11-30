import PrintHero from '@/components/hero/PrintHero';
import PrintsLayout from '@/components/layouts/PrintsLayout';
import Gallery from '@/components/gallery/Gallery';
import PrintContact from '@/components/PrintContact';

import { galleryImages } from '@/data';

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
