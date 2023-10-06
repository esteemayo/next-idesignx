'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';
import type { Metadata } from 'next';

import DesignHero from '@/components/hero/DesignHero';

const Featured = dynamic(() => import('@/components/Featured'), { ssr: false });
const Mission = dynamic(() => import('@/components/Mission'), { ssr: false });
const Statement = dynamic(() => import('@/components/Statement'), {
  ssr: false,
});
const Request = dynamic(() => import('@/components/Request'), { ssr: false });

export const metadata: Metadata = {
  title: 'iDesignx | Designs',
};

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
  background-color: ${({ theme }) => theme.bgDesign};
  display: grid;
  grid-template-rows: 80vh 40vw repeat(2, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 64em) {
    grid-template-rows: 50vh 40vw repeat(2, min-content);
  }

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 45vh;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 40vh;
  }
`;

export default Designs;
