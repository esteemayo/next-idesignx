'use client';

import GalleryHero from '@/components/hero/GalleryHero';
import styled from 'styled-components';

const Gallery = () => {
  return (
    <Container>
      <GalleryHero />
    </Container>
  );
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};
`;

export default Gallery;
