import type { Metadata } from 'next';

import Innovation from '@/components/Innovation';
import Mission from '@/components/Mission';
import DesignHero from '@/components/hero/DesignHero';
import Request from '@/components/Request';
import DesignsLayout from '@/components/layouts/DesignsLayout';
import Statement from '@/components/Statement';

// import Featured from '@/components/Featured';

export const metadata: Metadata = {
  title: 'iDesignx | Designs',
};

const Designs = () => {
  return (
    <DesignsLayout>
      <DesignHero />
      <Innovation />
      {/* <Featured /> */}
      <Mission />
      <Request />
      <Statement />
    </DesignsLayout>
  );
};

export default Designs;
