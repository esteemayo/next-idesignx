'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

import GalleryHero from '@/components/hero/GalleryHero';

const ImageGallery = dynamic(() => import('@/components/ImageGallery'), {
  ssr: false,
});

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

  display: grid;
  grid-template-rows: 70vh min-content;
  grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    ) [center-end] minmax(6rem, 1fr) [full-end];
`;

export default Gallery;
