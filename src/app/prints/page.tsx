'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { galleryImages } from '@/data/data';
import PrintHero from '@/components/hero/PrintHero';

const Gallery = dynamic(() => import('@/components/gallery/Gallery'), {
  ssr: false,
});
const PrintContact = dynamic(() => import('@/components/PrintContact'), {
  ssr: false,
});

const Prints = () => {
  return (
    <Container>
      <PrintHero />
      <Gallery data={galleryImages} />
      <PrintContact />
    </Container>
  );
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 70vh repeat(2, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start]repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 50em) {
    grid-template-rows: 60vh;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 40vh;
  }
`;

export default Prints;
