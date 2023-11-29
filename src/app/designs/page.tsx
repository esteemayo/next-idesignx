import dynamic from 'next/dynamic';

import DesignHero from '@/components/hero/DesignHero';
import DesignsLayout from '@/components/layouts/DesignsLayout';

// const Featured = dynamic(() => import('@/components/Featured'), { ssr: false });
const Innovation = dynamic(() => import('@/components/Innovation'), {
  ssr: false,
});
const Mission = dynamic(() => import('@/components/Mission'), { ssr: false });
const Statement = dynamic(() => import('@/components/Statement'), {
  ssr: false,
});
const Request = dynamic(() => import('@/components/Request'), { ssr: false });

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
