'use client';

import styled from 'styled-components';

import Featured from '@/components/Featured';
import DesignHero from '@/components/hero/DesignHero';
import Mission from '@/components/Mission';
import Statement from '@/components/Statement';
import Request from '@/components/Request';

const Designs = () => {
  return (
    <Container>
      <DesignHero />
      <Featured />
      <Mission />
      <Request />
      <Statement />
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-rows: 80vh 40vw repeat(2, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export default Designs;
