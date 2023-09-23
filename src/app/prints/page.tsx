'use client';

import styled from 'styled-components';

import Gallery from '@/components/Gallery';
import PrintHero from '@/components/hero/PrintHero';

const Prints = () => {
  return (
    <Container>
      <PrintHero />
      <Gallery />
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-rows: 70vh repeat(2, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start]repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];
`;

export default Prints;
