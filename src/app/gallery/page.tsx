'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Metadata } from 'next';

import GalleryHero from '@/components/hero/GalleryHero';

const PrintContact = dynamic(() => import('@/components/PrintContact'), {
  ssr: false,
});
const ImageGallery = dynamic(() => import('@/components/ImageGallery'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'iDesignx | Gallery',
};

const Gallery = () => {
  return (
    <Container>
      <GalleryHero />
      <ImageGallery />
      <PrintContact bcg='/img/gallery/gal-16.jpg' />
    </Container>
  );
};

const Container = styled.main`
  background-color: ${({ theme }) => theme.bg};

  display: grid;
  grid-template-rows: 70vh repeat(2, min-content);
  grid-template-columns:
    [full-start] minmax(6rem, 1fr) [center-start] repeat(
      8,
      [col-start] minmax(min-content, 15rem) [col-end]
    )
    [center-end] minmax(6rem, 1fr) [full-end];

  @media only screen and (max-width: 37.5em) {
    grid-template-rows: 60vh;
  }

  @media only screen and (max-width: 25em) {
    grid-template-rows: 40vh;
  }
`;

export default Gallery;
