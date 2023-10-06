'use client';

import styled from 'styled-components';
import GalleryHero from '@/components/hero/GalleryHero';

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
