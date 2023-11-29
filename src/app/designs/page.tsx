import DesignHero from '@/components/hero/DesignHero';
import Mission from '@/components/Mission';
import DesignsLayout from '@/components/layouts/DesignsLayout';
import Request from '@/components/Request';
import Innovation from '@/components/Innovation';
import Statement from '@/components/Statement';

// import Featured from '@/components/Featured';

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
