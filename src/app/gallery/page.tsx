'use client';

import styled from 'styled-components';

import ImageGallery from '@/components/ImageGallery';
import GalleryHero from '@/components/hero/GalleryHero';

const Gallery = () => {
  return (
    <Container>
      <GalleryHero />
      <ImageGallery />
    </Container>
  );
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};
`;

export default Gallery;
