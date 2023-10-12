'use client';

import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Metadata } from 'next';
import { useCallback, useMemo, useState } from 'react';

import ImageModal from '@/components/modal/ImageModal';
import GalleryHero from '@/components/hero/GalleryHero';

import { galleryItems } from '@/data';
import { useImageModal } from '@/hooks/useImageModal';

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
  const isOpen = useImageModal((state) => state.isOpen);
  const onClose = useImageModal((state) => state.onClose);
  const onOpen = useImageModal((state) => state.onOpen);

  const [slideIndex, setSlideIndex] = useState(0);
  const [images, setImages] = useState(galleryItems);

  const handleOpen = useCallback(
    (index: number) => {
      onOpen();
      setSlideIndex(index);
    },
    [onOpen]
  );

  const handleClick = useCallback(
    (direction: string) => {
      let newSlideIndex;
      const lastIndex = images.length - 1;

      if (direction === 'left') {
        newSlideIndex = slideIndex === 0 ? lastIndex : slideIndex - 1;
      } else {
        newSlideIndex = slideIndex === lastIndex ? 0 : slideIndex + 1;
      }

      setSlideIndex(newSlideIndex);
    },
    [images, slideIndex]
  );

  const selectedImage = useMemo(() => {
    return images[slideIndex].img;
  }, [images, slideIndex]);

  return (
    <Container>
      <GalleryHero />
      <ImageGallery images={images} onOpen={handleOpen} />
      <PrintContact bcg='/img/gallery/gal-15.jpg' />
      <ImageModal
        image={selectedImage}
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleClick}
      />
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
